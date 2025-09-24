import Link from "next/link";
import { DivWizardID, DivWizardIDToElexirs } from "@/styles/wizardId.styled";
import axios from "axios";


type typeElexirsID = {
    id:string;
    name: string;
}

 type typeWizardsID = {
   elixirs: typeElexirsID[];
   id: string;
   firstName: string;
   lastName: string;
}

type PropsWizardsID = {
  data:typeWizardsID;
  error:string;
}
  

function WizardsID({data,error} : PropsWizardsID){
  const midata = data;
  return(
    <>
      {
        error && error ? (<div><h1>{error}</h1></div>) :
        <DivWizardID>
            <div>First Name: {midata.firstName}</div>
            <div>Last Name: {midata.lastName}</div>
               <div>Elixirs: {midata.elixirs && midata.elixirs.map((mielixirs) => 
                 <DivWizardIDToElexirs>
                   <Link href={`/elixirs/${mielixirs.id}`}>
                      <div>Name: {mielixirs.name}</div>
                   </Link>
                 </DivWizardIDToElexirs>
                )}
               </div>
        </DivWizardID>
      }  
    </>  
  )
} 
export default WizardsID;


type ServerSideProps = {
  params:{
      id:string;
  }
}

export async function getServerSideProps(props: ServerSideProps) {
  const id = props.params.id;
  let data;
  try {
   const response = await axios.get(`https://wizard-world-api.herokuapp.com/Wizards/${id}`);
   data = response.data;
   return {
    props:{
      data:data
    }
  }
  } catch (error:any) {
    error = "Error 404 - Página no encontrada";
    return {
      props:{
        error:error
      }
    }
  }
}

/*
 En los props sólo se regresan/ponen, las cosas que vas a utilizar en el componente (función principal) 
 como parámetros/props

  midata.elixirs && midata.elixirs.map((mielixirs) =>  , si midata.elexirs no existe, ahí para el programa y no
  regresa ningún error por defecto, pero si existe, se sigue a la siguiente condición o parte del programa, que
  es el midata.elixirs.map((mielixirs) => , todo esto es una manera de controlar los nulls o undefined porque 
  jsx no reconoce estos valores, más bien te los regresa como errores automáticos y no manejados o programados
  por el programador, lo haces también en los maps porque un undefined no puede tener/no le puedes poner una
  función .map, .filter, .reduce ...


  Para poner un campo, podría poner en los divs de mis elementos, 
  <div>First Name: {midata.firstName === null ? "NO TIENE NOMBRE": midata.firstName},</div>
  en vez de 
  <div>First Name: {midata.firstName},</div>

  De forma que siempre que sea un campo vacío/no existente, me saque el texto no tiene nombre, si no
  es vacío, pues me saca midata.firstName, pero al final he optado por div>First Name: {midata.firstName},</div>, 
  aunque la otra forma es válida e incluso algo más correcta, dado que maneja imprevistos.
*/