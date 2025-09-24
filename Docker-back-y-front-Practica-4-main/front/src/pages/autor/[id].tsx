import { DivRectangulo, PrimaryButton, SpinnerComponent, SpinnerContainer, StyledErrorMessage, TableRow } from "@/styles/app.styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


type Autor = {
   name: string;
 }

function Autor() {

  const [data,setData] = useState<Autor>();
  const [cargandoPagina, setcargandoPagina] = useState<boolean>(true);
  const [error,setError] = useState<string>("");
  const [books,setBooks] = useState<string[]>([]);
  const router = useRouter();

  async function fetchAuthors(mi_id : string){
    try {
      const response = await axios.get(`http://localhost:3002/getAuthor/${mi_id}`);
      setData(response.data);
      const booksArray : string[] = [];
      response.data.books.map( async (book : string , i : number) => {
        const bookName = await axios.get(`http://localhost:3002/getBook/${book}`);
        booksArray.push(bookName.data.title);
        if(i+1 === response.data.books.length){
          setBooks([...books,...booksArray]);  
        }
      })
      setcargandoPagina(false);
    } catch (error){
      setError("Error");
      setcargandoPagina(false);
    }
  }

  useEffect(() => {
    const mi_id = router.query.id;
    if(mi_id){
      fetchAuthors(mi_id as string);
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
                <li>Nombre:{data?.name}</li>
                <ul>Títulos:{books?.map((title) => <li>{title}</li>)}</ul>
              </ul>
            }
         </div>
      </>
      }
    </>
  )
}

export default Autor;