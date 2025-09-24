import { gql } from '@apollo/client';
import Link from 'next/link';
import React from 'react';
import apolloClient from '../../../apollo-client';

const QUERY = gql`
query QUERY($ids: [ID!]!) {
  locationsByIds(ids: $ids) {
    id
    name
    type
    dimension
    residents {
      id
      name
    }
  }
}
`
type ResidentsType = {
  id:string;
  name:string;
}

type LocationType = {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: ResidentsType[];
}

type LocationsByIdsType = {
  locationsByIds:LocationType[];
}


type PropsLocations = {
    data:LocationsByIdsType;
    error:string;
}


function LocationsId({data,error}:PropsLocations) {
  if(error){
    return <h1>{error}</h1>
  }
  return (
      <div>
        {
          data.locationsByIds.map((midata) => 
          <ul>
            <li>Nombre : {midata.name}</li>
            <li>Tipo : {midata.type}</li>
            <li>Dimensión : {midata.dimension}</li>
            <ul>
              {
              midata.residents.map((character) => {
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

export default LocationsId;


type ServerSideProps = {
    params:{
        id:string;
    }
  }

  export async function getServerSideProps(props: ServerSideProps) {
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

