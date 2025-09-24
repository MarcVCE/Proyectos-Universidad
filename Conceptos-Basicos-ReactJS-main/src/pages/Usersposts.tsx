import { Card, CardWrapper, Table } from '@/styles/app.styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

type User = {
  id?:number; 
  name:string;
  email:string;
}

type Post = {
  id:number;
  title:string;
}

const inicialUser = {
   name:"Luis",
   email:"luis@gmail.com"
}

const inicialPosts = [
  {
    id:1 ,
    title:"La casa de Luis"
  }
]

function Usersposts(){
    const [user,setUser] = useState<User>(inicialUser);
    const [posts,setPosts] = useState<Post[]>(inicialPosts);
    async function getUser(){
      const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      setUser(response.data);
    } 
    async function getPostsUser(mi_id:number = 1){
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${mi_id}`);
      setPosts(response.data);
    } 
    async function changeUser(){
      const mi_id = Math.round(Math.random()*10);
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${mi_id}`);
      setUser(response.data);
      getPostsUser(mi_id);
    } 
    useEffect(() => 
      {getUser();getPostsUser();},
    []); 
      
      //Se ejecuta al recargar la página (1 vez) y sirve para coger los datos de la API (useEffect)
      // No pongo el changeUser en el useEffect, porque no tiene sentido poner cuando sólo se ejecuta
      //al recargar o la primera vez que lanzas la aplicación (1 vez).

  return (
    <>
      <button onClick={() => changeUser()}>Cambiar usuario</button>
      <div>Nombre: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>UserID: {user.id}</div><br/>
      {/* <Table> */}
      <CardWrapper>
      {posts.map((post) => 
        <Card>
          <div> Id: {post.id} -Título: {post.title}</div>
          <Image src={'https://unavatar.io/perro'} alt={'Perro'} width={100} height={100}/> 
        </Card>
      )}
      </CardWrapper>
      {/* </Table> */}
    </>
  )
}

export default Usersposts;