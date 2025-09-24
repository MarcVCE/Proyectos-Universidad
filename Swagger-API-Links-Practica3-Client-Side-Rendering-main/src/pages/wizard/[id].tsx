import Link from "next/link";
import { DivWizardID, DivWizardIDToElexirs} from "@/styles/wizardId.styled";
import { useEffect,useState } from 'react'
import { useRouter } from "next/router";
import { SpinnerContainer, SpinnerComponent } from '@/styles/spinner.styled'
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
 

function WizardsID(){

  const router = useRouter();
  const [data, setData] = useState<typeWizardsID>();
  const [cargandoPagina, setcargandoPagina] = useState<boolean>(true);
  const [error, setError] = useState<string>("");


  async function getWizardsID(mi_id : string) {

    try {
     
      const response = await axios.get(`https://wizard-world-api.herokuapp.com/Wizards/${mi_id}`)
      setData(response.data);
      setcargandoPagina(false);
      setError("");
    }catch(error){        
      setError("Error");
      setcargandoPagina(false);
    }
  }

  //El getWizardsID() depende del router (con el mi_id), a su vez, el router, tiene que ir dentro del componente,
  //esto HashChangeEvent, que todo getWizardsID y el router vayan dentro del componente 

  useEffect(() => {
    const mi_id = router.query.id;
    if(mi_id){
     getWizardsID(mi_id as string);
    }
  }, [router.query.id]); 

  return(
    <>
      {
        cargandoPagina && cargandoPagina ? (<SpinnerContainer><SpinnerComponent></SpinnerComponent></SpinnerContainer>) : 
        error && error ? (<div><h1>{error}</h1></div>) :
        data &&
        <DivWizardID>
            <div>First Name: {data.firstName}</div>
            <div>Last Name: {data.lastName}</div>
               <div>Elixirs: {data.elixirs && data.elixirs.map((mielixirs) => 
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


//Data status solo existe cuando hay un error