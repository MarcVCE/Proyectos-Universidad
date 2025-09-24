import ClientOnly from '@/Components/ClientOnly'
import BlogPost from '@/Components/BlogPost'
import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import { ButtonBlue, DivCenter, DivFlex } from '@/styles/app.styled'
import React,{ useState } from 'react'

const QUERY = gql`
query Query($limit:Int, $page:Int){
  posts(limit:$limit, page:$page){
    id
    imageUrl
    title
    body
  }
}
`
type Post= {
        id: string;
        imageUrl: string;
  title: string;
  body: string;
}
type Posts=Post[]

export default function Posts() {
    const [page, setPage]=useState(0)
  const { data, loading, error } = useQuery(QUERY, {variables:{limit:3, page:page}});

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (error) {
    const ErrorMessage = `Ha ocurrido el siguiente error ${error.message}`
    return <h2>ErrorMessage</h2>;
  }
  return (
    <div>
      <DivFlex>
      {data.posts.map((post:Post) => <Link href={`/posts/${post.id}`} >
        <BlogPost title={post.title} imageUrl={post.imageUrl} body={post.body} />
      </Link>)}
         

          </DivFlex>
          <DivCenter>
       {
              page === 0 ? (<span>{page}<ButtonBlue onClick={() => setPage(page+1)}>Siguiente</ButtonBlue></span>) : (<span><ButtonBlue onClick={() => setPage(page-1)}>Anterior</ButtonBlue>{page}<ButtonBlue onClick={() => setPage(page+1)} >Siguiente</ButtonBlue></span>)
              }
              </DivCenter>
          </div>
  )
}
