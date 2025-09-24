import { DivElixirsID, DivMappingElementsElexirs } from "@/styles/elixirsId.styled"
import axios from "axios"


type typeIngredientsID = {
    id:string;
    name: string;
}

type typeInventorsID = {
    id:string;
    firstName: string;
    lastName: string;
}

type typeElixirsID = {
    id: string;
    name: string;
    effect: string;
    sideEffects: string;
    characteristics: string;
    time: string;
    difficulty: unknown;
    ingredients: typeIngredientsID[];
    inventors: typeInventorsID[];
    manufacturer: string;
}

type PropsElixirsID = {
  data:typeElixirsID;
  error:string;
}
 
  
function ElixirsID({data,error} : PropsElixirsID){
  const midata = data;
  return(
    <>
      {
        error && error ? (<div><h1>{error}</h1></div>) :
        <DivElixirsID>
            <div>Id: {midata.id}</div>
            <div>Name: {midata.name}</div>
            <div>Effect: {midata.effect}</div>
            <div>SideEffects: {midata.sideEffects}</div>
            <div>Characteristics: {midata.characteristics}</div>
            <div>Time: {midata.time}</div>
            <div>Difficulty: 
              <>
              {midata.difficulty}
              </>
            </div>
            <div>Ingredients: {midata.ingredients && midata.ingredients.map((miingredients) => 
              <DivMappingElementsElexirs>
                <div>Id: {miingredients.id}</div>
                <div>Name: {miingredients.name}</div>
              </DivMappingElementsElexirs>
            )}
            </div>
            <div>Inventors: {midata.inventors && midata.inventors.map((miinventors) => 
              <DivMappingElementsElexirs>
                <div>Id: {miinventors.id}</div>
                <div>FirstName: {miinventors.firstName}</div>
                <div>LastName: {miinventors.lastName}</div>
              </DivMappingElementsElexirs>
            )}
            </div>
            <div>Manufacturer: {midata.manufacturer}</div>
        </DivElixirsID>
      }  
    </>  
  )
} 
export default ElixirsID;


type ServerSideProps = {
  params:{
      id:string;
  }
}

export async function getServerSideProps(props: ServerSideProps) {
  const id = props.params.id;
  let data;
  try {
   const response = await axios.get(`https://wizard-world-api.herokuapp.com/Elixirs/${id}`);
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


