import axios from 'axios';
import Link from 'next/link';
import React from 'react';

type LocationType = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

type PropsLocations = {
    data:LocationType;
    error:string;
}


function LocationsId({data,error}:PropsLocations) {
  if(error){
    return <h1>{error}</h1>
  }
  return (
      <div>
        <ul>
          <li>Nombre : {data.name}</li>
          <li>Tipo : {data.type}</li>
          <li>Dimensión : {data.dimension}</li>
          <ul>
            {
             data.residents.map((url) => {
               const residentId = url.split('/').pop();
               return (
                 <li key={residentId}> 
                   <Link href={`/characters/${residentId}`}>Residente {`${residentId}`}</Link>
                 </li>
               )
             })
            }
          </ul>
        </ul>
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
    let data;
    try {
     const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
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

