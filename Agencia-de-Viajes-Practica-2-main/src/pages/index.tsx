import Link from "next/link";
import { destinos } from "@/data/data";
import imagen from "../../public/backgroundmainpagemenu.png";
import Paginaprincipal from "@/styles/paginaprincipal.styled";

function Home(){
  return(
    <>
      {
        destinos.map(valor => (
          <Paginaprincipal img = {imagen}>
          <div>
            <div>
              <Link href={`/viajedetallado/${valor.id}`}><img src={valor.imagen_corta}/></Link>
            </div>
            <div>
              <p>{valor.titulo}</p>
              <p>{valor.descripcion_corta}</p>
            </div>
          </div>  
          </Paginaprincipal>
        ))
      } 
    </>
  )
}
export default Home;
