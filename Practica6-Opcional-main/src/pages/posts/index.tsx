import ClientOnly from '@/Components/ClientOnly'
import FormUser from '@/Components/FormUser'
import Posts from '@/Components/Posts'
import React from 'react'

export default function User() {
  return (
      <ClientOnly>
          <Posts/>
    </ClientOnly>
  )
}
