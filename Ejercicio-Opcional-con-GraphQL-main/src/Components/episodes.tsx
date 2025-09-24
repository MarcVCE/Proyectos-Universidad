import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const QUERY = gql`
query QUERY($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
      name
      air_date
      episode
      characters {
        id
        name
      }
    }
  }
`

type typeCharacter = {
    name: string;
    id: string;
}

type EpisodeType = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: typeCharacter[];
    url: string;
    created: string;
}

function Episodes() {

  const router = useRouter();
  const mi_id = router.query.id;
  const {data,loading,error,refetch} = useQuery(QUERY,{variables:{ids:mi_id}});
  const episodesById : EpisodeType[] = data?.episodesByIds;

  if(error){
    const errorMessage = `Ha ocurrido un error: ${error.message}`;
    return (<h2>{errorMessage}</h2>)
  }   

  return (  
    
      loading && loading !== undefined ? <h2>Cargando...</h2> : 
      <div>
        {
          episodesById.map((midata) => 
            <ul>
            <li>Nombre : {midata.name}</li>
            <li>Fecha de estreno : {midata.air_date}</li>
            <li>Episodio : {midata.episode}</li>
            <ul>
                {
                    midata.characters.map((character) => {
                    return (
                    <li key={character.id}> 
                    <Link href={`/character/${character.id}`}>{character.name}</Link>
                    </li>
                    )
                })
                }
            </ul>
            </ul>
          )
        }
      </div>
  )
}
export default Episodes;