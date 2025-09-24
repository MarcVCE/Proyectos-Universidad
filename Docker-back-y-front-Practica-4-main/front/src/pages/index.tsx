import { PrimaryButton } from "@/styles/app.styled";
import Link from "next/link";


function Home() {
  return (
    <>
     <Link href={"libros"}><PrimaryButton>Libros</PrimaryButton></Link>
     <Link href={"usuarios"}><PrimaryButton>Usuarios</PrimaryButton></Link>
     <Link href={"autores"}><PrimaryButton>Autores</PrimaryButton></Link>  
    </>
  )
}

export default Home;
