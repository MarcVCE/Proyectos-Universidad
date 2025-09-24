import { PrimaryButton, SpinnerComponent, SpinnerContainer, StyledErrorMessage, TableRow } from "@/styles/app.styled";
import axios from "axios";
import { useEffect, useState } from "react";

type Usuarios = {
  name:string;
  email:string;
}

function Usuarios() {
  const [data,setData] = useState<Usuarios[]>([]);
  const [formData,setFormData] = useState<Usuarios>({name:"",email:""});
  const [cargandoPagina, setcargandoPagina] = useState<boolean>(true);
  const [hideForm,setHideForm] = useState<boolean>(false);
  const [error,setError] = useState<string>("");
  async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
     event.preventDefault();
     try {
       await axios.post(`http://localhost:3002/addUser/`,formData); 
       setFormData({name:"",email:""});
       setError("")
       setHideForm(false);
     } catch (error){
       setError("Error");
       setHideForm(false);
     }
  }
  async function fetchUsers(){
    try {
      const response = await axios.get(`http://localhost:3002/getUsers/`); 
      setData(response.data.users);
      setcargandoPagina(false);
    } catch (error){
      setError("Error");
      setcargandoPagina(false);
    }
  }
  function handleChange(event:React.ChangeEvent<HTMLInputElement>){
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  useEffect(() => {
    fetchUsers();
  }, [formData]);
  return (
    <>
      {
      cargandoPagina && cargandoPagina ? (<SpinnerContainer><SpinnerComponent></SpinnerComponent></SpinnerContainer>) :
      <>
        <PrimaryButton onClick={() => setHideForm(true)}>Agregar Usuarios</PrimaryButton>
        {
        hideForm && 
        <form onSubmit={(event)=>handleSubmit(event)}>
          <input type="text" name="name" value={formData.name} onChange={handleChange}/>
          <input type="text" name="email" value={formData.email} onChange={handleChange}/>
          <PrimaryButton type="submit">Enviar formulario</PrimaryButton>
        </form>
        }
        {<StyledErrorMessage>{error}</StyledErrorMessage>}
        <table>
          <thead>
            <TableRow>
              <th>Usuario</th>
              <th>Usuario</th>
              <th>Usuario</th>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
            {data.map((user) => <td>Nombre:{user.name}<br/>Email:{user.email}</td>)}
            </TableRow>
          </tbody>
        </table>
      </>
      }
    </>
  )
}

export default Usuarios;