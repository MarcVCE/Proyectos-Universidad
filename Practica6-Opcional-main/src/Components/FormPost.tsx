import { ButtonBlue, ErrTxt, ScsTxt } from '@/styles/app.styled'
import { gql, useMutation } from '@apollo/client';
import React, { TextareaHTMLAttributes, useState } from 'react'

const ADD_POST = gql`
mutation AddPost($input:CreatePostInput!){
  createPost(input:$input){
    title
    imageUrl
    body
  }
}
`

export default function FormPost() {
      const [formData, setFormData] = useState({
    title: '',
          body: '', 
    imageUrl:""
      });
        const [succes, setSucces]=useState("")

    
    function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSucces("")
        createPost({variables:{input:{
  title:formData.title,
  body:formData.body,
  imageUrl:formData.imageUrl
        }
        }
        })
        if ( error?.message === undefined) {
             setSucces("Se agrego el post con exito")
        }
        
    }

    const [createPost, {data, loading, error}] = useMutation(ADD_POST)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    };
    
  return (
      <div>
          {loading?<h1>Cargando</h1>:
      <form onSubmit={handleSubmit}>
            <label htmlFor="title">Titulo</label><br />
            <textarea cols={100} rows={3}  name="title" value={formData.title} onChange={handleChange} /><br />
            <label htmlFor="body">Cuerpo</label><br />
            <textarea cols={100} rows={20}  name="body" value={formData.body} onChange={handleChange} /><br />
            <label htmlFor="imageUrl">URL de la Imagen</label><br />
            <textarea cols={100} rows={3}  name="imageUrl" value={formData.imageUrl} onChange={handleChange} /><br />
            <ButtonBlue type="submit">Agregar</ButtonBlue><br />
            {error?.message === undefined ? "" : <ErrTxt>Error:{error?.message} </ErrTxt>}
                        {succes=== "" ? "" : <ScsTxt>{succes} </ScsTxt>}

              </form>
          }
    </div>
  )
}
