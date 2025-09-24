import { LiStyled, RomanStyled, UlStyled } from '@/styles/app.styled';
import { gql, useQuery } from '@apollo/client';
import React from 'react'

const QUERY = gql`
query ExampleQuery($personId: ID) {
    person(id: $personId) {
      name
      birthYear
      eyeColor
      gender
      height
      homeworld {
        name
      }
      species {
        name
      }
    }
  }
`

type typeHomeworld = {
  name: string;
}

type typeSpecies = {
  name: string;
}

type typeDetalleAutor = {
    name: string;
    birthYear: string;
    eyeColor: string;
    gender: string;
    height: number;
    homeworld: typeHomeworld;
    species: typeSpecies;
}

type typeId = {
  id:string;
}

function DetalleAutor({id}:typeId) {
    
    const {data,loading,error,refetch} = useQuery(QUERY,{variables:{personId:id}});
    if(loading){
      return (<h2>Cargando...</h2>)
    }  
    if(error){
      const errorMessage = "Ha ocurrido un error";
      return (<h2>{errorMessage}</h2>)
    }   
    const detalleAutor : typeDetalleAutor = data.person;

    return (
      <UlStyled>
        <li>Nombre: {detalleAutor.name}</li>
        <li>Año de nacimiento: {detalleAutor.birthYear}</li>
        <li>Color de ojos: {detalleAutor.eyeColor}</li>
        <li>Genero: {detalleAutor.gender}</li>
        <li>Altura: {detalleAutor.height}</li>
        <li>Planeta de nacimiento: {detalleAutor.homeworld.name}</li>
        <li>Especie: {detalleAutor.homeworld.name}</li>
      </UlStyled>
    )
}

export default DetalleAutor;
