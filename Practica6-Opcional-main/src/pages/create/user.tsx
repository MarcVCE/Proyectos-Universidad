import ClientOnly from '@/Components/ClientOnly'
import FormUser from '@/Components/FormUser'
import React from 'react'

export default function User() {
  return (
      <ClientOnly>
          <FormUser/>
    </ClientOnly>
  )
}
