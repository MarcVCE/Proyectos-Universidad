import { TablaHead, TablaPersona } from '@/styles/app.styled';
import { useState } from 'react';

type Persona = {
  name:string;
  lastname:string;
  dni:string;
}


function Table() {

  const [name, setName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [dni, setDni] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>(""); 
  const [arraypersona,setArrayPersona] = useState<Persona[]>([]);
  const personadni = arraypersona.find((my_dni) => my_dni.dni === dni);
  function handleSubmit(event:React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();
    if(name === "" || lastname === "" || dni === ""){
      setErrorMsg("No debe haber campos vacíos");
      return;  
    }
    
    if(personadni){
      setErrorMsg("Este Dni ya existe");
      return;
    }
    
    setArrayPersona([...arraypersona,{name,lastname,dni}])
  }

  function handleDelete(arrayPersona: Persona[] , dni:string){
    setArrayPersona(arrayPersona.filter((persona) => persona.dni !== dni));
  }

  return (
    <>
      <TablaPersona>
        <TablaHead>Nombre</TablaHead>
        <TablaHead>Apellido</TablaHead>
        <TablaHead>DNI</TablaHead>
        <TablaHead></TablaHead>
        {
          arraypersona.map((persona) => 
          <>
            <div>{persona.name}</div>
            <div>{persona.lastname}</div>
            <div>{persona.dni}</div>
            <button onClick={() => handleDelete(arraypersona, persona.dni)}>❌</button>
          </>
          )
        }
      </TablaPersona>

      <h1>{errorMsg}</h1> 
      <form>
      <input type="text" name="name" placeholder="Nombre" value={name} onChange={(event) => 
        setName(event.target.value)}/>
      <input type="text" name="lastname" placeholder="Apellido" value={lastname} onChange={(event) => 
        setLastName(event.target.value)}/>
      <input type="text" name="dni" placeholder="DNI" value={dni} onChange={(event) => 
        setDni(event.target.value)}/>
      <button onClick={(event) => handleSubmit(event)}>🧑</button>
      </form>
      
    </>
  )
}

export default Table;
