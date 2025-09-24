import { LiStyled, RomanStyled, UlStyled } from '@/styles/app.styled';
import convertToRoman from '@/utils/roman';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import React from 'react'

const QUERY = gql`
query Query($filmId: ID) {
  film(id: $filmId) {
    episodeID
    director
    title
    releaseDate
    characterConnection {
      characters {
        name
        id
      }
    }
  }
} 
`

type typeCharacters = {
  name: string;
  id: string;
}

type typeCharacterConnection = {
  characters: typeCharacters[];
}

type typeDetallePelicula = {
  episodeID: number;
  director: string;
  title: string;
  releaseDate: string;
  characterConnection:typeCharacterConnection;
}

type typeId = {
  id:string;
}

function DetallePelicula({id}:typeId) {
    
    const {data,loading,error,refetch} = useQuery(QUERY,{variables:{filmId:id}});
    if(loading){
      return (<h2>Cargando...</h2>)
    }  
    if(error){
      const errorMessage = "Ha ocurrido un error";
      return (<h2>{errorMessage}</h2>)
    }   
    const miDetallePelicula : typeDetallePelicula = data.film;
    let roman = convertToRoman(miDetallePelicula.episodeID);

    return (
      <div>
        <label htmlFor="roman">Numero de Pelicula</label><br/>
        <input type="text" name="roman" value={roman}/><br/>
        <label htmlFor="title">Titulo</label><br/>
        <input type="text" name="title" value={miDetallePelicula.title} /><br/>
        <label htmlFor="director">Director</label><br/>
        <input type="text" name="director" value={miDetallePelicula.director} /><br/>
        <label htmlFor="releaseDate">Fecha de Salida</label><br/>
        <input type="text" name="releaseDate" value={miDetallePelicula.releaseDate}/><br/>   
        Personajes : <UlStyled>
        {
          miDetallePelicula.characterConnection.characters.map((character:typeCharacters) => 
            <Link href={`/autor/${character.id}`}><li>Nombre : {character.name}</li></Link>
        )}
        </UlStyled>
      </div>

    )
}

export default DetallePelicula;
