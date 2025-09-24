import { PrimaryButton } from "@/styles/app.styled";
import Link from "next/link";


function Home() {
  return (
    <>
     <Link href={"peliculas"}><PrimaryButton>Películas</PrimaryButton></Link>
     <Link href={"planetas"}><PrimaryButton>Planetas</PrimaryButton></Link>
     <Link href={"vehiculos"}><PrimaryButton>Vehículos</PrimaryButton></Link>  
    </>
  )
}

export default Home;
