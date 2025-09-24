import { PrimaryButton, SpinnerComponent, SpinnerContainer, StyledErrorMessage, TableRow } from "@/styles/app.styled";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

type Autores = {
  name:string;
  _id:string;
}

type formAutores = {
  name:string;
}

function Autores() {
  const [data,setData] = useState<Autores[]>([]);
  const [formData,setFormData] = useState<formAutores>({name:""});
  const [cargandoPagina, setcargandoPagina] = useState<boolean>(true);
  const [hideForm,setHideForm] = useState<boolean>(false);
  const [error,setError] = useState<string>("");
  async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
     event.preventDefault();
     try {
       await axios.post(`http://localhost:3002/addAuthor/`,formData); 
       setFormData({name:""});
       setError("")
       setHideForm(false);
     } catch (error){
       setError("Error");
       setHideForm(false);
     }
  }
  async function fetchAuthors(){
    try {
      const response = await axios.get(`http://localhost:3002/getAuthors`); 
      setData(response.data.authors)
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
    fetchAuthors();
  }, [formData]);
  return (
    <>
      {
      cargandoPagina && cargandoPagina ? (<SpinnerContainer><SpinnerComponent></SpinnerComponent></SpinnerContainer>) :
      <>
        <PrimaryButton onClick={() => setHideForm(true)}>Agregar Autores</PrimaryButton>
        {
        hideForm && 
        <form onSubmit={(event)=>handleSubmit(event)}>
          <input type="text" name="name" value={formData.name} onChange={handleChange}/>
          <PrimaryButton type="submit">Enviar formulario</PrimaryButton>
        </form>
        }
        {<StyledErrorMessage>{error}</StyledErrorMessage>}
        <table>
          <thead>
            <TableRow>
              <th>Autores</th>
              <th>Autores</th>
              <th>Autores</th>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
            {data.map((author) => <Link href={`/autor/${author._id}`}><td>Nombre:{author.name}</td></Link>)}
            </TableRow>
          </tbody>
        </table>
      </>
      }
    </>
  )
}

export default Autores;