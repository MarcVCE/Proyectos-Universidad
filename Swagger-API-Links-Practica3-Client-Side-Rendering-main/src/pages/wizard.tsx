import Link from "next/link";
import { DivWizard} from "@/styles/wizard.styled";
import { useEffect,useState } from 'react'
import { SpinnerContainer, SpinnerComponent } from '@/styles/spinner.styled'
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
  
function Wizards(){
 
  const [data, setData] = useState<typeWizards[]>([]);
  const [cargandoPagina, setcargandoPagina] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  async function getWizards() {
    try {
      const response = await axios.get(`https://wizard-world-api.herokuapp.com/Wizards`);
      setData(response.data);
      setcargandoPagina(false);
    } catch (error) {
      setError("Error");
      setcargandoPagina(false);
    }
  }
  
  useEffect(() => {
    getWizards();
  }, []);

  return ( 
      <>
      {
          cargandoPagina && cargandoPagina ? (<SpinnerContainer><SpinnerComponent></SpinnerComponent></SpinnerContainer>) : 
          error && error ? (<div><h1>{error}</h1></div>) :
          data && data.map(midata => (
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
  