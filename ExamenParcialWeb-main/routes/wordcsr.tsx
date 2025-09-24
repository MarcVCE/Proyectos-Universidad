import { PageProps } from "$fresh/server.ts";
import Cliente from "../islands/Cliente.tsx";


const Wordcsr = (props: PageProps) => {
  return (
    <div>
        Hola
        <Cliente></Cliente>
    </div>
  )
}

export default Wordcsr