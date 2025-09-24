import ClientOnly from '@/Components/clientonly';
import Pelicula from '@/Components/pelicula';
import React from 'react'

function Peliculas() {
  return (
    <ClientOnly>
      <Pelicula/>
    </ClientOnly>
  )
}

export default Peliculas;
