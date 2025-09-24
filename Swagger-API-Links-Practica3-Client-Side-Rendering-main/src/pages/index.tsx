import { DivPaginaprincipal, UlPaginaprincipal } from '@/styles/index.styled'
import { useEffect,useState } from 'react'
import { SpinnerContainer, SpinnerComponent } from '@/styles/spinner.styled'
import axios from 'axios';

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

function Houses(){

  const [data, setData] = useState<typeHouses[]>([]);
  const [cargandoPagina, setcargandoPagina] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  async function getHouses() {
    try {
      const response = await axios.get(`https://wizard-world-api.herokuapp.com/Houses`); 
      setData(response.data);
      setcargandoPagina(false);
    } catch (error) {
      setError("Error");
      setcargandoPagina(false);
    }
  }
  
  useEffect(() => {
    getHouses();
  }, []);

  return (
    <>
     {
       cargandoPagina && cargandoPagina ? (<SpinnerContainer><SpinnerComponent></SpinnerComponent></SpinnerContainer>) :
       error && error ? (<div><h1>{error}</h1></div>) :
       <DivPaginaprincipal>
       <UlPaginaprincipal>
        { 
           data && data.map(midata => (
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
     }
  </>
  )
}

export default Houses;