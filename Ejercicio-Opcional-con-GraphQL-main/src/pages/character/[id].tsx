import { ButtonStyle, WrapperCharacterDiv } from '@/styles/app-styled';
import { gql, useQuery } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import apolloClient from '../../../apollo-client';

const QUERY = gql`
query QUERY($ids: [ID!]!) {
  charactersByIds(ids: $ids) {
    name
    status
    species
    type
    gender
    image
    location {
      name
      id
    }
    episode {
      id
      name
    }
  }
}
`
type typeEpisode = {
  name: string;
  id: string;
}

type CharacterType = {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: {
    name: string;
    id: string;
  };
  image: string;
  episode: typeEpisode[];
}

type CharacterByIdsType = {
  charactersByIds:CharacterType[];
}

type PropsCharacter = {
  data:CharacterByIdsType;
  error:string;
}

function CharacterId({data,error}:PropsCharacter) {
  if(error){
    return <h1>{error}</h1>
  }
  return (
    <WrapperCharacterDiv>
    {
      data.charactersByIds.map((midata) => 
      <>
      <div>
        <Image src={midata.image} alt={midata.name} width={500} height={800}/><br/>
        <Link href={'/'}><ButtonStyle>Volver</ButtonStyle></Link>
      </div>
      <div>
        <ul>
          <li>Nombre : {midata.name}</li>
          <li>Estado : {midata.status}</li>
          <li>Especie : {midata.species}</li>
          <li>Tipo : {midata.type}</li>
          <li>Género : {midata.gender}</li>
          <li>
            <Link href={`/locations/${midata.location.id}`}>Ubicación : {midata.location.name}</Link>
          </li>
          <ul>
            {
             midata.episode.map((episode) => {
               return (
                 <li key={episode.id}> 
                   <Link href={`/episode/${episode.id}`}>{episode.name}</Link>
                 </li>
               )
             })
            }
          </ul>
        </ul>
      </div>
      </>
      )
    }
    </WrapperCharacterDiv>
  )
}
export default CharacterId;

type StaticSideProps = {
    params:{
        id:string;
    }
}

export async function getStaticProps(props: StaticSideProps) {
    const id = props.params.id;
    try {
      const {data} = await apolloClient.query({query:QUERY,variables:{ids:id}}); 
        return {
          props:{
            data:data
          }
        }
    } catch (error:any) {
      return {
        props:{
          error:error.networkError.result.errors[0].message 
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