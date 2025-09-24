import ClientOnly from '@/Components/clientonly';
import Planeta from '@/Components/planeta';
import React from 'react'

function Planetas() {
  return (
    <ClientOnly>
      <Planeta/>
    </ClientOnly>
  )
}

export default Planetas;
