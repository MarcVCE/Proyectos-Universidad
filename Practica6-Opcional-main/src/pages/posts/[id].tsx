import ClientOnly from '@/Components/ClientOnly'
import { useRouter } from 'next/router';

import React from 'react'
import DetallePost from '@/Components/DetallePost';

export default function PostID() {
    const router = useRouter()
    const id= router.query.id
    return (
      
        <ClientOnly>
            <DetallePost id={id as string} ></DetallePost>
     </ClientOnly>
  );
}
