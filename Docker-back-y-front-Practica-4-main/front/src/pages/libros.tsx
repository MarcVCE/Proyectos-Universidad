import { DivRectangulo, PrimaryButton, SpinnerComponent, SpinnerContainer, StyledErrorMessage, TableRow } from "@/styles/app.styled";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

type Libros = {
  pages: number;
  title: string;
  _id: string;
}

type formLibros = {
  author: string;
  pages: number;
  title: string;
}

type Autores = {
  name:string;
  _id:string;
}

function Libros() {
  const [data,setData] = useState<Libros[]>([]);
  const [autores,setAutores] = useState<Autores[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [cargandoPagina, setcargandoPagina] = useState<boolean>(true);
  const [formData,setFormData] = useState<formLibros>({author:"",pages:0,title:""});
  const [hideForm,setHideForm] = useState<boolean>(false);
  const [error,setError] = useState<string>("");
  
  async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
     event.preventDefault();
     const findAuthor = autores.find((autor) => autor.name === formData.author);
     formData.author = findAuthor ? findAuthor._id : formData.author; 
     try {
       await axios.post(`http://localhost:3002/addBook/`,formData); 
       setFormData({author:"",pages:0,title:""});
       setError("")
       setHideForm(false);
     } catch (error){
       setError("Error");
       setHideForm(false);
     }
     findAuthor ? "" : setError("No se encontró ningún autor con ese nombre"); 
 }

  async function fetchBooks(){
    try {
      const response = await axios.get(`http://localhost:3002/getBooks/`); 
      setData(response.data.books);
      const responseAutores = await axios.get(`http://localhost:3002/getAuthors/`); 
      setAutores(responseAutores.data.authors);
      setcargandoPagina(false);
    } catch (error){
      setError("Error");
      setcargandoPagina(false);
    }
  }
  function handleChange(event:React.ChangeEvent<HTMLInputElement>){
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  async function fetchColors(){
    try {
      const response = await axios.get(`http://localhost:3002/getBooks/`); 
      const randomColor = ( () => response.data.books.map(()=>Math.floor(Math.random() * 16777215).toString(16)) );
      setColors(randomColor);
    } catch (error){
      setError("Error");
    }
  }
  useEffect(() => {
    fetchBooks();
  }, [formData]);
  
  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <>
      {
      cargandoPagina && cargandoPagina ? (<SpinnerContainer><SpinnerComponent></SpinnerComponent></SpinnerContainer>) :
      <>
        <PrimaryButton onClick={() => setHideForm(true)}>Agregar Libros</PrimaryButton>
        {
        hideForm && 
        <form onSubmit={(event)=>handleSubmit(event)}>
          <input type="text" name="author" placeholder="Autor" value={formData.author} onChange={handleChange}/>
          <input type="number" name="pages" value={formData.pages} onChange={handleChange}/>
          <input type="text" name="title" placeholder="Título" value={formData.title} onChange={handleChange}/>
          <PrimaryButton type="submit">Enviar formulario</PrimaryButton>
        </form>
        }
        {<StyledErrorMessage>{error}</StyledErrorMessage>}
        <table>
          <thead>
            <TableRow>
              <th>Libro</th>
              <th>Libro</th>
              <th>Libro</th>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
            {data.map((book,i) => <Link href={`/libro/${book._id}`}>
              <td>
              <DivRectangulo color={colors[i]}>
                Páginas:{book.pages}<br/>
                Título:{book.title}<br/>
              </DivRectangulo>
              </td>
            </Link>)}
            </TableRow>
          </tbody>
        </table>
      </>
      }
    </>
  )
}

export default Libros;