import { BodyPaginaprincipal, Card, CharactersDiv, ImageHolder, ButtonStyle, Wrapper, WrapperButton, WrapperSearch, InputStyle} from '@/styles/app-styled';
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React ,{useState, useEffect} from 'react';
import miimagen from '../../public/rick-morty-critica.jpg'

type personajes = {
  id:number;
  name:string;
  image:string;
}
function Home() {
  const [errMsg, setErrMsg]=useState<string>("");
  const [data, setData] = useState<personajes[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [page, setPage] = useState<number>(40);
  
  async function fetchCharacters(alternativePage:number){
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${alternativePage}`);
      setData(response.data.results);
      setErrMsg("");
    } catch (error) {
      setErrMsg("Error")
    }
  }

  async function fetchCharactersByName(alternativePage:number){
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${alternativePage}&name=${inputSearch.toLowerCase()}`); 
      setData(response.data.results);
      setErrMsg("");
    } catch (error) {
      setErrMsg("Error")
    }
  }

  function fetchCharactersNext(){
    if(data.length !== 0){
      setPage((prevPage) => prevPage + 1);
      if(inputSearch === ''){
        fetchCharacters(page + 1);
      }else{
        fetchCharactersByName(page + 1);
      } 
    }
  }

  function fetchCharactersPrevious(){
    if(page >= 1){
      setPage((prevPage) => prevPage - 1);
      if(inputSearch === ''){
        fetchCharacters(page - 1);
      }else{
        fetchCharactersByName(page - 1);
      }
    } 
  }

  useEffect(() => {
    fetchCharacters(page);
  }, []);
  
  return (
    <Wrapper>
    <WrapperSearch>
     <InputStyle type='text' value={inputSearch} onChange={(event) => setInputSearch(event.target.value)}/>
     <ButtonStyle onClick={() =>{setPage(1) ; fetchCharactersByName(1)}}>Buscar</ButtonStyle>
    </WrapperSearch>
    <BodyPaginaprincipal img={miimagen}/>
    <CharactersDiv>
      {data.map((personaje) =>
        <Link href={`/characters/${personaje.id}`} style={{textDecoration:"none",color:"white"}} key={personaje.id}>
         <Card>
          <ImageHolder>
            <Image src={personaje.image} alt={'character'} width={300} height={300} />
            <h2>{personaje.name}</h2>
          </ImageHolder>
         </Card>
        </Link>
      )}
    </CharactersDiv>
    <WrapperButton>
      {page === 1 ? null : <ButtonStyle onClick={() => fetchCharactersPrevious()}>◀</ButtonStyle>}
      {errMsg !== "" ? null : <ButtonStyle onClick={() => fetchCharactersNext()}>▶</ButtonStyle>}
    </WrapperButton>
    </Wrapper>
  )
}

export default Home;