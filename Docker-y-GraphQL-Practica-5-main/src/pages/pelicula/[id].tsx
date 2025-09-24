import ClientOnly from "@/Components/clientonly";
import DetallePelicula from "@/Components/detallePelicula";
import { useRouter } from "next/router";


function PeliculaID() {
    const router = useRouter();
    const mi_id = router.query.id;
  return (
    <ClientOnly>
      <DetallePelicula id ={mi_id as string}></DetallePelicula>
    </ClientOnly>
  )
}

export default PeliculaID;

