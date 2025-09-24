import { DivElixirsID, DivMappingElementsElexirs } from "@/styles/elixirsId.styled"
import { useEffect,useState } from 'react'
import { useRouter } from "next/router";
import { SpinnerContainer, SpinnerComponent } from '@/styles/spinner.styled'
import axios from "axios";

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
 

function ElixirsID(){

  const router = useRouter();
  const [data, setData] = useState<typeElixirsID>();
  const [cargandoPagina, setcargandoPagina] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  async function getElixirsID(mi_id : string){
    try{
      const response = await axios.get(`https://wizard-world-api.herokuapp.com/Elixirs/${mi_id}`);
      setData(response.data);
      setcargandoPagina(false);
       }catch(error){        
        setError("Error");
        setcargandoPagina(false);
       }
  }

  useEffect(() => {
    const mi_id = router.query.id;
    if(mi_id){
      getElixirsID(mi_id as string);
    }
  }, [router.query.id]); 

  return(
    <>
      {
         cargandoPagina && cargandoPagina ? (<SpinnerContainer><SpinnerComponent></SpinnerComponent></SpinnerContainer>) : 
         error && error ? (<div><h1>{error}</h1></div>) :
         data &&
        <DivElixirsID>
            <div>Id: {data.id}</div>
            <div>Name: {data.name}</div>
            <div>Effect: {data.effect}</div>
            <div>SideEffects: {data.sideEffects}</div>
            <div>Characteristics: {data.characteristics}</div>
            <div>Time: {data.time}</div>
            <div>Difficulty: 
              <>
              {data.difficulty}
              </>
            </div>
            <div>Ingredients: {data.ingredients && data.ingredients.map((miingredients) => 
              <DivMappingElementsElexirs>
                <div>Id: {miingredients.id}</div>
                <div>Name: {miingredients.name}</div>
              </DivMappingElementsElexirs>
            )}
            </div>
            <div>Inventors: {data.inventors && data.inventors.map((miinventors) => 
              <DivMappingElementsElexirs>
                <div>Id: {miinventors.id}</div>
                <div>FirstName: {miinventors.firstName}</div>
                <div>LastName: {miinventors.lastName}</div>
              </DivMappingElementsElexirs>
            )}
            </div>
            <div>Manufacturer: {data.manufacturer}</div>
        </DivElixirsID>
      }  
    </>  
  )
} 

export default ElixirsID;
