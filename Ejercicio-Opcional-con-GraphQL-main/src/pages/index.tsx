import ClientOnly from '@/Components/clientonly';
import Characters from '@/Components/characters';
import React from 'react'

function Home() {
  return (
    <ClientOnly>
      <Characters/>
    </ClientOnly>
  )
}

export default Home;
