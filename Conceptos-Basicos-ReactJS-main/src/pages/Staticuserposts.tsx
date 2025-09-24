import axios from 'axios';

type User = {
  id?:number; 
  name:string;
  email:string;
}

type Post = {
  id:number;
  title:string;
}

type Data = { 
  user:User;
  posts:Post[];
}

type PropsUsersPosts = {
  data:Data;
  error:string;
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

function Staticusersposts({data,error} : PropsUsersPosts){
  return (
    <>
    {
      error && error ? (<div><h1>{error}</h1></div>) :
      <>
        <div>Nombre: {data.user.name}</div>
        <div>Email: {data.user.email}</div>
        <div>UserID: {data.user.id}</div><br/>
        {data.posts.map((post) => 
          <>
            <div>Id: {post.id} </div>
            <div>Título: {post.title}</div>
          </>
        )}
      </>
    }
    </>
  )
}

export default Staticusersposts;

export async function getStaticProps() {
    let data : Data = {user:inicialUser,posts:inicialPosts};
    const mi_id = Math.round(Math.random()*10);
    try {
      const responseUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${mi_id}`);
      const responsePosts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${mi_id}`); 
      data.user = responseUser.data;
      data.posts = responsePosts.data;
     return {
      props:{
        data:data
      }
    }
    } catch (error:any) {
      error = "Error de servidor";
      return {
        props:{
          error:error
        }
      }
    }
  }