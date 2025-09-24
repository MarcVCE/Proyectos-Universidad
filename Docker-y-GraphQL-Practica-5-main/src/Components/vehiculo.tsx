import { LiStyled, PlanetColorStyled, RomanStyled, UlStyled } from '@/styles/app.styled';
import { gql, useQuery } from '@apollo/client';
import React from 'react'

const QUERY = gql`
query Query {
    allVehicles {
      vehicles {
        costInCredits
        name
        model
        length
        passengers
        cargoCapacity
      }
    }
  }  
`
type typeVehiculo = {
    costInCredits:number;   
    name:string;
    model:string;
    length:number;
    passengers:string;
    cargoCapacity:number;
}

function Vehiculo() {   
    const {data,loading,error,refetch} = useQuery(QUERY);
    if(loading){
      return (<h2>Cargando...</h2>)
    }  
    if(error){
      const errorMessage = `Ha ocurrido un error: ${error.message}`;
      return (<h2>{errorMessage}</h2>)
    }   
    const vehiculos : typeVehiculo[] = data.allVehicles.vehicles;
    return (
      <div>
        {
          vehiculos.map((vehiculo:typeVehiculo) => 
             <UlStyled>
               <li><RomanStyled>{vehiculo.costInCredits}</RomanStyled></li>
               <li>Nombre: {vehiculo.name}</li>
               <li>Modelo: {vehiculo.model}</li>
               <li>Longitud: {vehiculo.length}</li>
               <li>Pasajeros: {vehiculo.passengers}</li>
               <li>Capacidad cargo: {vehiculo.cargoCapacity}</li>
              </UlStyled>
            )
        }
      </div>
    )
}

export default Vehiculo;
