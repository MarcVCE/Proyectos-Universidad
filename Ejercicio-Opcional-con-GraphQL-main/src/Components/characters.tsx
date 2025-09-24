import { BodyPaginaprincipal, Card, CharactersDiv, ImageHolder, ButtonStyle, Wrapper, WrapperButton, WrapperSearch, InputStyle} from '@/styles/app-styled';
import Image from 'next/image';
import Link from 'next/link';
import React ,{useState, useEffect} from 'react';
import miimagen from '../../public/rick-morty-critica.jpg'
import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
query Query($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    results {
      id
      name
      image
    }
  }
}
`

type typeCharacters = {
  id:string;
  name:string;
  image:string;
}

function Characters() {
  
  const [inputSearch, setInputSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const {data,loading,error,refetch} = useQuery(QUERY,{variables:{page:page,filter:{name:inputSearch}}}); 
  if(error){
    const errorMessage = `Ha ocurrido un error: ${error.message}`;
    return (<h2>{errorMessage}</h2>)
  }   
  const characters : typeCharacters[] = data?.characters.results;

function fetchCharactersNext(){
   if(characters.length !== 0){
    setPage((prevPage) => prevPage + 1);
   }  
}

function fetchCharactersPrevious(){
  if(page >= 1){
    setPage((prevPage) => prevPage - 1);
  } 
}
 
  return (
    <Wrapper>
    <WrapperSearch>
     <InputStyle type='text' value={inputSearch} onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
      {setPage(1);setInputSearch(event.target.value)}}/> 
    </WrapperSearch>
      <BodyPaginaprincipal img={miimagen}/>
      <CharactersDiv>
      {
       loading && loading !== undefined ? <h2>Cargando...</h2> : 
       <>
        {
         characters.map((personaje) =>
          <Link href={`/character/${personaje.id}`} style={{textDecoration:"none",color:"white"}} key={personaje.id}>
          <Card>
            <ImageHolder>
              <Image src={personaje.image} alt={'character'} width={300} height={300} />
              <h2>{personaje.name}</h2>
            </ImageHolder>
          </Card>
          </Link>
        )}
       </>
      }
      </CharactersDiv>
      <WrapperButton>
        {page === 1 ? null : <ButtonStyle onClick={() => fetchCharactersPrevious()}>◀</ButtonStyle>}
        {characters?.length === 0 ? null : <ButtonStyle onClick={() => fetchCharactersNext()}>▶</ButtonStyle>}
      </WrapperButton>
    </Wrapper>
  )
}

export default Characters;