import { DivRectangulo, PrimaryButton, SpinnerComponent, SpinnerContainer, StyledErrorMessage, TableRow } from "@/styles/app.styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Libro = {
   ISBN: string;
   author: string;
   pages: number;
   title: string;
}

type Autor = {
   name: string;
 }

function Libro() {
    
  const [data,setData] = useState<Libro>();
  const [author,setAuthor] = useState<Autor>();
  const [cargandoPagina, setcargandoPagina] = useState<boolean>(true);
  const [error,setError] = useState<string>("");
  const router = useRouter();


  async function fetchBooks(mi_id : string){
    try {
      const response = await axios.get(`http://localhost:3002/getBook/${mi_id}`); 
      setData(response.data);
      const responseAuthor = await axios.get(`http://localhost:3002/getAuthor/${response.data.author}`); 
      setAuthor(responseAuthor.data);
      setcargandoPagina(false);
    } catch (error){
      setError("Error");
      setcargandoPagina(false);
    }
  }

  useEffect(() => {
    const mi_id = router.query.id;
    if(mi_id){
      fetchBooks(mi_id as string);
    }
  }, [router.query.id]); 

  return (
    <>
      {
      cargandoPagina && cargandoPagina ? (<SpinnerContainer><SpinnerComponent></SpinnerComponent></SpinnerContainer>) :
      <>
        {<StyledErrorMessage>{error}</StyledErrorMessage>}
         <div>
            {
              <ul>
                <li>ISBN:{data?.ISBN}</li>
                <li>Autor:{author?.name}</li>
                <li>Páginas:{data?.pages}</li>
                <li>Título:{data?.title}</li>
              </ul>
            }
         </div>
      </>
      }
    </>
  )
}

export default Libro;