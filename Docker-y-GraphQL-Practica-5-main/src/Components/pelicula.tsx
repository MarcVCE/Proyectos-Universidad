import { LiStyled, RomanStyled } from '@/styles/app.styled';
import convertToRoman from '@/utils/roman';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import React from 'react'

const QUERY = gql`
query Query {
  allFilms {
    films {
      episodeID
      title
      id
    }
  }
}
`

type typePelicula = {
  title: string;
  episodeID: number;
  id:string;
}

function Pelicula() {
    
    const {data,loading,error,refetch} = useQuery(QUERY);
    if(loading){
      return (<h2>Cargando...</h2>)
    }  
    if(error){
      const errorMessage = `Ha ocurrido un error: ${error.message}`;
      return (<h2>{errorMessage}</h2>)
    }   
    const peliculas : typePelicula[]  = data.allFilms.films;
    return (
      <div>
        {
          peliculas.map((pelicula:typePelicula) => 
            {
             let roman = convertToRoman(pelicula.episodeID);
             return ( 
              <Link href={`/pelicula/${pelicula.id}`} style={{textDecoration:"none"}}>
              <LiStyled><RomanStyled>{roman}</RomanStyled>{pelicula.title}</LiStyled></Link>
             )
            })
        }
      </div>

    )
}

export default Pelicula;
