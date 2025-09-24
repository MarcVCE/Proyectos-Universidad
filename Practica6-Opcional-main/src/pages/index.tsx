import ClientOnly from '@/Components/ClientOnly'
import BlogPost from '@/Components/BlogPost'
import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import { DivFlex } from '@/styles/app.styled'

const QUERY = gql`
query Query($limit:Int){
  posts(limit:$limit){
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

export default function Home() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (error) {
    const ErrorMessage = `Ha ocurrido el siguiente error ${error.message}`
    return ErrorMessage;
  }
  const last3 = data.posts.slice(-3) 
  return (
    <ClientOnly>
      <DivFlex>
      {last3.map((post:Post) => <Link href={`/posts/${post.id}`} >
        <BlogPost title={post.title} imageUrl={post.imageUrl} body={post.body} />
      </Link>)}
      </DivFlex>
</ClientOnly>
  )
}
