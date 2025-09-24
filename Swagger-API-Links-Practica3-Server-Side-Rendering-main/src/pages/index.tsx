import { DivPaginaprincipal, UlPaginaprincipal } from '@/styles/index.styled'
import axios from 'axios'


type typeHeads = {
  id:string; 
  firstName: string; 
  lastName:string;
}

type typeTraits = {
  id:string;
  name: string;
}

type typeHouses = {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: typeHeads[];
  traits: typeTraits[];
}

type PropsHouses = {
  data:typeHouses[];
  error:string;
}


function Houses({data,error} : PropsHouses){
  return (
      <DivPaginaprincipal>
      <UlPaginaprincipal>
      {
          error && error ? (<div><h1>{error}</h1></div>) :
          data.map(midata => (
            <>
               <li>Name: {midata.name}</li>
               <li>Founder: {midata.founder}</li>
               <li>CommonRoom: {midata.commonRoom}</li>
               <UlPaginaprincipal>Head mages: {midata.heads.map((miheads) => 
                   <li>First Name: {miheads.firstName}</li>
               )}
               </UlPaginaprincipal>
               <UlPaginaprincipal>Traits: {midata.traits.map((mitraits) => 
               <>
                 <li>Id: {mitraits.id}</li>
                 <li>Name: {mitraits.name}</li>
               </>
               )}
               </UlPaginaprincipal>
            </>
          )
         )
      } 
      </UlPaginaprincipal>
      </DivPaginaprincipal>
  )
}
export default Houses;


export async function getServerSideProps() {
  let data;
  try {
   const response = await axios.get(`https://wizard-world-api.herokuapp.com/Houses`);
   data = response.data;
   return {
    props:{
      data:data
    }
  }
  } catch (error:any) {
    error = "Error de servidor";
    return {
      props:{
        error:error
      }
    }
  }
}