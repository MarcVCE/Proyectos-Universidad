import { ButtonStyle, WrapperCharacterDiv } from '@/styles/app-styled';
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

type PropsCharacters = {
  data:CharacterType;
  error:string;
}

function CharactersId({data,error}:PropsCharacters) {
  if(error){
    return <h1>{error}</h1>
  }
  const locationId = data.location.url.split('/').pop();
  return (
    <WrapperCharacterDiv>
      <div>
        <Image src={data.image} alt={data.name} width={500} height={800}/><br/>
        <Link href={'/'}><ButtonStyle>Volver</ButtonStyle></Link>
      </div>
      <div>
        <ul>
          <li>Nombre : {data.name}</li>
          <li>Estado : {data.status}</li>
          <li>Especie : {data.species}</li>
          <li>Tipo : {data.type}</li>
          <li>Género : {data.gender}</li>
          <li>
            <Link href={`/locations/${locationId}`}>Ubicación : {data.location.name}</Link>
          </li>
          <ul>
            {
             data.episode.map((url) => {
               const episodeId = url.split('/').pop();
               return (
                 <li key={episodeId}> 
                   <Link href={`/episodes/${episodeId}`}>Episodio {`${episodeId}`}</Link>
                 </li>
               )
             })
            }
          </ul>
        </ul>
      </div>
    </WrapperCharacterDiv>
  )
}
export default CharactersId;

type StaticSideProps = {
    params:{
        id:string;
    }
}

export async function getStaticProps(props: StaticSideProps) {
    const id = props.params.id;
    let data;
    try {
     const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
     data = response.data;
     return {
      props:{
        data:data
      }
    }
    } catch (error) {
      error = "Error";
      return {
        props:{
          error:error
        }
      }
    }
}

export async function getStaticPaths() { 
  let arrayIdPersonajes = [];
  for (let i = 1; i <= 826; i++){
    arrayIdPersonajes.push(`${i}`);
  } 
  
  // { fallback: false } means other routes should 404
  return { 
    paths: arrayIdPersonajes.map((id) => (
      {
        params: {
          id:id
        }
      }
    )),
    fallback: false 
  };
} 

//El getStaticPaths no es opcional si la ruta es dinámica = tiene [] como [id].tsx
