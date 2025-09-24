import ClientOnly from "@/Components/clientonly";
import DetalleAutor from "@/Components/detalleAutor";
import { useRouter } from "next/router";


function AutorID() {
    const router = useRouter();
    const mi_id = router.query.id;
  return (
    <ClientOnly>
      <DetalleAutor id ={mi_id as string}></DetalleAutor>
    </ClientOnly>
  )
}

export default AutorID;

