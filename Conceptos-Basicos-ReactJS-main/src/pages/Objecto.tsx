import React, { useState } from 'react'

type Direccion = {
  calle:string;
  numero?:number; 
  ciudad?:string;
}
type Persona = {
  nombre:string;
  apellido?:string;
  direccion: Direccion;
}

const inicial = {nombre:"Juan",apellido:"Lopez",direccion:{calle:"Amazon Street",numero:0,ciudad:"Chicago"}};

function Objecto(){ 
  const [persona,setPersona] = useState<Persona>(inicial);
  function datosPersona(){
    setPersona({...persona, nombre:"Juan",direccion:{calle:"Gran Vía"}})
  } 
  return (
    <>
     <button onClick={() => datosPersona()}>Editar datos</button>
     <div>{persona.nombre}</div>
     <div>{persona.apellido}</div>
     <div>{persona.direccion.calle}</div>
    </>
  )
}

export default Objecto;
