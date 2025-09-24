import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type EpisodeType = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

function EpisodesId() {

  const router = useRouter();
  const [data, setData] = useState<EpisodeType>();
  const [error, setError] = useState<string>("");

  async function getEpisodes(mi_id : string){
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${mi_id}`);
        setData(response.data);
       } catch (error) {
        setError("Error");
       }
  }

  useEffect(() => {
    const mi_id = router.query.id;
    if(mi_id){
      getEpisodes(mi_id as string);
    }
  }, [router.query.id]); 

  return (
      <div>
        {
          error && error ? (<div><h1>{error}</h1></div>) :
          data &&
          <ul>
          <li>Nombre : {data.name}</li>
          <li>Fecha de estreno : {data.air_date}</li>
          <li>Episodio : {data.episode}</li>
          <ul>
             {
                data.characters.map((url) => {
                const characterId = url.split('/').pop();
                return (
                  <li key={characterId}> 
                  <Link href={`/characters/${characterId}`}>Personaje {`${characterId}`}</Link>
                  </li>
                )
              })
             }
          </ul>
        </ul>
        }
      </div>
  )
}
export default EpisodesId;