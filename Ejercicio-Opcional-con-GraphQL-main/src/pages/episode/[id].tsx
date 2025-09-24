import ClientOnly from '@/Components/clientonly';
import Episodes from '@/Components/episodes';
import React from 'react'

function EpisodeId() {
  return (
    <ClientOnly>
      <Episodes/>
    </ClientOnly>
  )
}

export default EpisodeId;
