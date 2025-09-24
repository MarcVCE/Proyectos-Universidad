import { LiStyled, PlanetColorStyled, RomanStyled, UlStyled } from '@/styles/app.styled';
import { gql, useQuery } from '@apollo/client';
import React from 'react'

const QUERY = gql`
query Query {
    allPlanets {
      planets {
        name
        population
        gravity
      }
    }
  }
`
type typePlaneta = {
   name:string;
   population:number;
   gravity:string;
}

function colorPlaneta(poblacion: number) {
  let color;
  color = 0 < poblacion && poblacion < 6000000 ? "red" : poblacion < 4500000000 ? "green" : "purple";
  return (color);
} 

function Planeta() {   
    const {data,loading,error,refetch} = useQuery(QUERY);
    if(loading){
      return (<h2>Cargando...</h2>)
    }  
    if(error){
      const errorMessage = `Ha ocurrido un error: ${error.message}`;
      return (<h2>{errorMessage}</h2>)
    }   
    const planetas : typePlaneta[] = data.allPlanets.planets;
    return (
      <div>
        {
          planetas.map((planeta:typePlaneta) => 
             <UlStyled>
               <li><PlanetColorStyled color={colorPlaneta(planeta.population)}></PlanetColorStyled></li>
               <li>Nombre: {planeta.name}</li>
               <li>Poblacion: {planeta.population}</li>
               <li>Gravedad: {planeta.gravity}</li>
              </UlStyled>
            )
        }
      </div>
    )
}

export default Planeta;
