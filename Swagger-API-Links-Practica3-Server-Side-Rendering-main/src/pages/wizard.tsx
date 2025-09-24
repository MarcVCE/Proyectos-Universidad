import Link from "next/link";
import { DivWizard } from "@/styles/wizard.styled";
import axios from "axios";

  type typeElexirs = {
     id:string;
     name: string;
  }

  type typeWizards = {
    elixirs: typeElexirs[];
    id: string;
    firstName: string;
    lastName: string;
  }

  type PropsWizard = {
    data:typeWizards[];
    error:string;
  }
  
function Wizards({data,error} : PropsWizard){
  return ( 
      <>
      {
          error && error ? (<div><h1>{error}</h1></div>) :
          data.map(midata => (
            <DivWizard>
              <Link href={`/wizard/${midata.id}`}>
                  <div>First Name: {midata.firstName}</div>
                  <div>Last Name: {midata.lastName}</div>
              </Link>
            </DivWizard>
          )
          )
      } 
      </>
  )
}
export default Wizards;
  

export async function getServerSideProps() {
  let data;
  try {
   const response = await axios.get(`https://wizard-world-api.herokuapp.com/Wizards`);
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


  /* midata.firstName === null ? "NO TIENE NOMBRE": midata.firstName , si mi midata.firstName es igual a null,
     entonces saca "NO TIENE NOMBRE", sino, saca midata.firstName , el ? es el if de ese if-else, el : es el else de ese if-else */