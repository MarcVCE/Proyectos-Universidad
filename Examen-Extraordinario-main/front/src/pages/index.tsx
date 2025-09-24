import { useEffect, useState } from 'react';
import axios from 'axios';

type formEvent = {
  _id?:string;
  fecha:Date;
  descripcion:string;
  fin:number;
  inicio:number;
  titulo: string;
  invitados:string;
}

const initalFormEvent= {fecha: new Date(), titulo:"",
     descripcion: "", fin: 0, inicio: 0, invitados:""
   }

export default function Home() {
  const [errorMsg, setErrorMsg] = useState<string>();
  const [events, setEvents] = useState<formEvent[]>([])
  const [formData,setFormData] = useState<formEvent>(initalFormEvent);
  
  async function getEvents() {
    try {
     const response= await axios.get(`http://localhost:4000/events?date=${formData.fecha}`);
     setEvents(response.data)
    } catch (error) {
      setErrorMsg(`${error}`);
    }
    if(events.length === 0){
      setEvents([]);
    }
  }

  useEffect(() => {
    getEvents()
  },[])
  
  
  
    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
       setFormData({...formData,[event.target.name]:event.target.value})
    }
  
    async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
      event.preventDefault();
      setErrorMsg("")
      try {  
      await axios.post("localhost:4000/addEvent", {
        titulo: formData.titulo,
        fecha: formData.fecha,
        descripcion: formData.descripcion,
        fin: Number(formData.fin),
        inicio: Number(formData.inicio),
        invitados: formData.invitados.split(",")
     });
          
    setFormData(initalFormEvent)
    getEvents()
    
    } catch (error) {
      setErrorMsg(`${error}`);
    }
    }
  async function handleDelete(mi_id: string) {
   try {
     const response= await axios.delete(`http://localhost:4000/deleteEvent/${mi_id}`);
     getEvents()
    } catch (error) {
      setErrorMsg(`${error}`);
    } 
    const id_exists = events.some(() => formData._id === mi_id);
    if(id_exists === false){
        setErrorMsg("Error 404");
    }    
  }

  return (
    <>
      <form onSubmit={(event)=>handleSubmit(event)}>
         <input type="date" name="fecha" placeholder="Fecha" value={formData?.fecha.toString()} onChange={handleChange}/>
         <input type="text" name="titulo" placeholder="Título" value={formData.titulo} onChange={handleChange}/>
         <input type="text" name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleChange}/>
         <input type="number" name="inicio" placeholder="Hora de Comienzo" value={formData.inicio} onChange={handleChange}/>
         <input type="number" name="fin" placeholder="Hora de Fin" value={formData.fin} onChange={handleChange} />
         <input type="string" name="invitados" placeholder="Invitado" value={formData.invitados} onChange={handleChange}/>
         <button type="submit">Añadir nuevo evento</button>
      </form><br/><br/>
      Para editar el evento primero llenar el formulario con la informacion que quieres para el evento editado y despues haces click en el botton Editar evento
    
    <br /><br />
      {events.map((event: any) =>
        (<div key={event.titulo}>
        <ul >
          <li>Titulo:{event.titulo}</li>
          <li>Descripcion: {event.descripcion}</li>
          <li>Fecha: {event.fecha}</li>
          <li>Hora Inicio: {event.inicio}</li>
          <li>Hora Fin:{event.fin}</li>
          <ul>Invitados:
          {event.invitados.map((invitado:string, index:number)=><li>{invitado}</li>)}
        </ul>
         
        </ul>
        <button onClick={() => handleDelete(event._id)}>❌</button><br />
      </div>))}
    </>
  )
}

{/* <button onClick={() => { setIsEditing(false), setFormData(initalFormEvent) }}>Dejar de editar</button> */}
