import { BlogTitle, Card, Description, Enlace, ImgHolder } from '@/styles/app.styled'
import Image from 'next/image'
import React from 'react'

export default function BlogPost({title,imageUrl,body}:{title:string,imageUrl:string,body:string}) {
  return (
    <Card>
  <ImgHolder>
    <img src={imageUrl} alt="Blog image"/>
  </ImgHolder>
          <BlogTitle>{title }</BlogTitle>
  <Description>
     {body}
      </Description>
      <Enlace>Ver Más</Enlace>
</Card>
  )
}
