import ClientOnly from '@/Components/ClientOnly'
import FormPost from '@/Components/FormPost'
import Posts from '@/Components/posts'
import React from 'react'

export default function PostsClient() {
  return (
      <ClientOnly>
          <FormPost/>
    </ClientOnly>
  )
}
