import { useState } from 'react';
import { DiaCalendarioDiv, TableContainer, WeekDaysDiv } from '@/styles/app.styled';
import { gql, useMutation, useQuery } from '@apollo/client';

const CREATE_EVENT = gql`
mutation Mutation($title: String!, $description: String!, $date: Date!, $startHour: Int!, $endHour: Int!) {
  createEvent(title: $title, description: $description, date: $date, startHour: $startHour, endHour: $endHour) {
    id
    date
    description
    endHour
    startHour
    title
  }
}
`

const DELETE_EVENT = gql`
mutation Mutation($deleteEventId: ID!) {
  deleteEvent(id: $deleteEventId) {
    id
  }
}
`

const UPDATE_EVENT = gql`
mutation UpdateEvent($updateEventId: ID!, $title: String!, $description: String!, $date: Date!, 
  $startHour: Int!, $endHour: Int!) {
  updateEvent(id: $updateEventId, title: $title, description: $description, date: $date, 
    startHour: $startHour, endHour: $endHour) {
    id
  }
}
`


const GET_EVENTS = gql`
query Events {
  events {
    id
    date
    description
    endHour
    startHour
    title
  }
}
`


type formEvent = {
  id?:string;
  date:Date;
  description:string;
  endHour:number;
  startHour:number;
  title:string;
}


const mesArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
                  "Septiembre", "Octubre", "Noviemre", "Diciembre"];
const diasMesArray = [31,28,31,30,31,30,31,31,30,31,30,31];
const currentDate = new Date();

function Home() {
  const [errorMsg,setErrorMsg] = useState<string>();
  const [mes,setMes] = useState<number>(currentDate.getMonth());
  const [anyo,setAnyo] = useState<number>(currentDate.getFullYear());
  const [hideForm,setHideForm] = useState<boolean>(false);
  const [hideFormUpdate,setHideFormUpdate] = useState<boolean>(false);
  const [formData,setFormData] = useState<formEvent>({date: new Date(), title:"",
                                 description:"", endHour:0,startHour:0});
  const [formDataUpdate,setFormDataUpdate] = useState<formEvent>({date: new Date(), title:"",
                                 description:"", endHour:0,startHour:0});                               
  const [createEvent] = useMutation(CREATE_EVENT,{refetchQueries:[{query:GET_EVENTS}], 
    onError:() => setErrorMsg("Ya existe un evento en esa fecha y hora.")});
  const [deleteEvent] = useMutation(DELETE_EVENT,{refetchQueries:[{query:GET_EVENTS}]});
  const [updateEvent] = useMutation(UPDATE_EVENT,{refetchQueries:[{query:GET_EVENTS}], 
    onError:() => setErrorMsg("Ya existe un evento en esa fecha y hora.")});
  const {data,loading,error} = useQuery(GET_EVENTS);
  
  async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setErrorMsg("");
    try {
      await createEvent({
        variables: {
          title: formData.title,
          date: formData.date,
          description: formData.description,
          startHour: Number(formData.startHour),
          endHour: Number(formData.endHour),
        },
      });
    }catch(error){

    }
}

  function handleChange(event:React.ChangeEvent<HTMLInputElement>){
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  async function handleDelete(id:string){
    deleteEvent({variables:{deleteEventId:id}})
  }
  
  function handleChangeUpdate(event:React.ChangeEvent<HTMLInputElement>){
    setFormDataUpdate({...formDataUpdate,[event.target.name]:event.target.value})
  }

  async function handleUpdate(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setErrorMsg("");
    try {
      await updateEvent({variables:{
        updateEventId:formDataUpdate.id,
        title:formDataUpdate.title,
        date:formDataUpdate.date,
        description:formDataUpdate.description,
        startHour:Number(formDataUpdate.startHour),
        endHour:Number(formDataUpdate.endHour),
      }})
    }catch(error){
      
    }
  }

  function experimentoFecha(){
    if(anyo > currentDate.getFullYear() ){
      return(
       <>
         <button onClick={() => setAnyo(anyo-1)}>◀</button> 
         <h1>{anyo}</h1><button onClick={() => setAnyo(anyo + 1)}>▶</button>
       </>
      )
    }else{
      return(
        <>
         <h1>{anyo}</h1><button onClick={() => setAnyo(anyo + 1)}>▶</button>
        </>
      )
    }
  }

  return(
      <>
      <h1 style={{color:"red"}}>{errorMsg}</h1>
      <button onClick={() => setHideForm(!hideForm)}>Agregar Evento</button><br/><br/>
      {
        hideForm && 
        <form onSubmit={(event)=>handleSubmit(event)}>
          <input type="date" name="date" placeholder="Fecha" value={formData?.date.toString()} onChange={handleChange}/>
          <input type="text" name="title" placeholder="Título" value={formData.title} onChange={handleChange}/>
          <input type="text" name="description" placeholder="Descripción" value={formData.description} onChange={handleChange}/>
          <input type="number" name="startHour" placeholder="Hora de Comienzo" value={formData.startHour} onChange={handleChange}/>
          <input type="number" name="endHour" placeholder="Hora de Fin" value={formData.endHour} onChange={handleChange}/>
          <button type="submit">Crear evento</button>
        </form>
      }

      {
        hideFormUpdate && 
        <form onSubmit={(event)=>handleUpdate(event)}>
          <input type="date" name="date" placeholder="Fecha" value={formDataUpdate?.date.toString().slice(0,10)} onChange={handleChangeUpdate}/>
          <input type="text" name="title" placeholder="Título" value={formDataUpdate.title} onChange={handleChangeUpdate}/>
          <input type="text" name="description" placeholder="Descripción" value={formDataUpdate.description} onChange={handleChangeUpdate}/>
          <input type="number" name="startHour" placeholder="Hora de Comienzo" value={formDataUpdate.startHour} onChange={handleChangeUpdate}/>
          <input type="number" name="endHour" placeholder="Hora de Fin" value={formDataUpdate.endHour} onChange={handleChangeUpdate}/>
          <button type="submit">Editar evento</button>
        </form>
      }
      {experimentoFecha()}
      {/* { 
       anyo > currentDate.getFullYear() ? 
       <>
         <button onClick={() => setAnyo(anyo-1)}>◀</button> 
         <h1>{anyo}</h1><button onClick={() => setAnyo(anyo + 1)}>▶</button>
       </>
       :
       <>
         <h1>{anyo}</h1><button onClick={() => setAnyo(anyo + 1)}>▶</button>
       </>
      }
      <br/><br/> */}
      {
       anyo === currentDate.getFullYear() ?   
       mes > currentDate.getMonth() ? 
        <>
          <button onClick={() => setMes(mes-1)}>◀</button> 
          <h1>{mesArray[mes]}</h1>
          {
          mes < 11 ?
          <button onClick={() => setMes(mes + 1)}>▶</button>
          : ""
          }
        </>
        
        :
       
        <>
          <h1>{mesArray[mes]}</h1>
          {
          mes < 11 ?
          <button onClick={() => setMes(mes + 1)}>▶</button>
          : ""
          }
        </>
       
       : 

       mes > 0 ? 
       <>
         <button onClick={() => setMes(mes-1)}>◀</button> 
         <h1>{mesArray[mes]}</h1>
         {
         mes < 11 ?
         <button onClick={() => setMes(mes + 1)}>▶</button>
         : ""
         }
       </>   
          
        :
       
       <>
         <h1>{mesArray[mes]}</h1>
         {
         mes < 11 ?
         <button onClick={() => setMes(mes + 1)}>▶</button>
         : ""
         }
       </>
      }
      <br/><br/>
      <WeekDaysDiv>Lunes</WeekDaysDiv>
      <WeekDaysDiv>Martes</WeekDaysDiv>
      <WeekDaysDiv>Miércoles</WeekDaysDiv>
      <WeekDaysDiv>Jueves</WeekDaysDiv>
      <WeekDaysDiv>Viernes</WeekDaysDiv>
      <WeekDaysDiv>Sábado</WeekDaysDiv>
      <WeekDaysDiv>Domingo</WeekDaysDiv>
     <TableContainer>
      {
        Array.from(Array(diasMesArray[mes]).keys()).map((element, diaCalendario) =>
        {
          const midiaCalendario = (diaCalendario + 1) < 10 ? ("0" + (diaCalendario + 1)) : (diaCalendario + 1); 
          const mimes = (mes + 1) < 10 ? ("0" +(mes + 1)) : (mes + 1);
          const calendarDate = `${anyo}-${mimes}-${midiaCalendario}`;
          return(

            <DiaCalendarioDiv key={midiaCalendario}>
              {`${midiaCalendario}`}
              {data?.events.map((event: any) => 
                  event.date.slice(0,10) === calendarDate ? <div>{event.title}
                  <button onClick={() => {setHideFormUpdate(!hideFormUpdate);setFormDataUpdate(event)}}>
                  🖍</button>
                  <button onClick={() => handleDelete(event.id)}>❌</button>
                  </div> : "" 
              )}
            </DiaCalendarioDiv>
          )
        })
      }
     </TableContainer>
    </>
  )
}

export default Home;
