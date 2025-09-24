import ClientOnly from '@/Components/clientonly';
import Vehiculo from '@/Components/vehiculo';
import React from 'react'

function Vehiculos() {
  return (
    <ClientOnly>
      <Vehiculo/>
    </ClientOnly>
  )
}

export default Vehiculos;
