import { ButtonBlue, ErrTxt, ScsTxt } from '@/styles/app.styled'
import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react'

const ADD_USER = gql`
mutation AddUser($input:CreateUserInput!){
  createUser(input:$input){
    id
    name
    email
  }
}
`

export default function FormUser() {
      const [formData, setFormData] = useState({
    name: '',
          email: '', 
    password:""
      });
    const [errMsg, setErrMsg] = useState("");
            const [succes, setSucces]=useState("")


    
    function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
                setSucces("")
        createUser({variables:{input:{
  name:formData.name,
  email:formData.email,
  password:formData.password
        }
        }
        })
         if ( error?.message === undefined) {
             setSucces("Se agrego el post con exito")
        }
    }
    const [createUser, {data, loading, error}] = useMutation(ADD_USER)

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
      <div>
          {loading?<h1>Cargando</h1>:
      <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label><br />
            <input type="text" name="name" value={formData.name} onChange={handleChange} /><br />
            <label htmlFor="email">Email</label><br />
            <input type="text" name="email" value={formData.email} onChange={handleChange} /><br />
            <label htmlFor="password">Password</label><br />
            <input type="text" name="password" value={formData.password} onChange={handleChange} /><br />
            <ButtonBlue type="submit">Agregar</ButtonBlue><br />
            {error?.message === undefined ? "" : <ErrTxt>Error:{error?.message} </ErrTxt>}
             {succes=== "" ? "" : <ScsTxt>{succes} </ScsTxt>}

              </form>
          }
    </div>
  )
}
