import { ButtonBlue, DivComentarios } from '@/styles/app.styled'
import { gql, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'

const GET_POST = gql`
query Query($id:ID!){
  post(id:$id){
    title
    body
    comments{
      id
      body
      user{
        name
      }
      replies{
        body
        user{
          name
        }
      }
    } 
  }
}
`;

const CREATE_COMMENT = gql`
mutation createComment($input:CreateCommentInput!){
  createComment(input:$input){
    id
    body
    user{
      name
    }
  }
}
`

// const GET_COMENTS = gql`
// `

type id = {
    id:string
}
type User= {
        name:string
}
type Replies = {
    body: string;
    user:User
    }
type Comment = {
    id: string;
    body: string;
    user:User
    replies: Replies
}

export default function DetallePost({id}:id) {
    var { data, loading, error } = useQuery(GET_POST, { variables: { id: id } });
     const [formData, setFormData] = useState({
    body: '',
          userEmail: '', 
      });
    var [createComment] = useMutation(CREATE_COMMENT, { refetchQueries: [{ query: GET_POST, variables:{id:id}}]})
    
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    };

        
    function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        createComment({variables:{input:{
  body:formData.body,
  userEmail:formData.userEmail,
  postId:id
        }
        }
        })
        
    }

      if (loading ) {
    return <h2>Cargando...</h2>;
  }

  if (error ) {
      const ErrorMessage = `Ha ocurrido el siguiente error ${error?.message}`
      return <h2>{ErrorMessage}</h2>;
  }

  return (
    <div>
          <h3>{data.post.title} </h3> 
          <p>{data.post.body} </p><br/><br/>

            <form onSubmit={handleSubmit}>
            <label htmlFor="body">Comentario</label><br />
            <input type="text" name="body" value={formData.body} onChange={handleChange} /><br />
            <label htmlFor="userEmail">correo</label><br />
            <input type="text" name="userEmail" value={formData.userEmail} onChange={handleChange} /><br />
              <label htmlFor="password">Password</label><br />
                          <ButtonBlue type="submit">Agregar</ButtonBlue><br />

             </form><br/><br/>

            <DivComentarios>
              <h2 className="comments__title">{ data.post.comments.length} Comentarios</h2>
        <ul className="comments__list">
          {data.post.comments.map((comment:Comment) => (
            <li key={comment.id} className="comment">
              <strong className="comment__name">{comment.user.name}</strong>:<br/> {comment.body}
            </li>
          ))}
        </ul>
      </DivComentarios>
    </div>
  )
}
