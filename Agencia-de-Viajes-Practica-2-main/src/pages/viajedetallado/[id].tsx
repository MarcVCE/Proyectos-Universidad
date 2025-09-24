import { useRouter } from 'next/router'
import { destinos } from "@/data/data";
import PaginaSecundaria from "@/styles/paginasecundaria.styled"

function TravelDetails(){
  const router = useRouter();
  const mi_id = router.query.id;
  const destino = destinos.find((elemento)=>elemento.id === mi_id);
  return(
    <>
      <PaginaSecundaria>
        <form action="/">
          <div>
            <button type="submit">Click para volver a la página principal</button>
          </div>
        </form>
          <div>
            <img src={destino?.imagen_larga}/>
            <p>{destino?.titulo}</p>
            <p>{destino?.descripcion_larga}</p>
          </div>
      </PaginaSecundaria>
    </>  
  )
} 
export default TravelDetails;
