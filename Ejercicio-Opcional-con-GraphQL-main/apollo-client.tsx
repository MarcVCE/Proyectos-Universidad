import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient(
    {
        uri: "https://rickandmortyapi.com/graphql",
        cache: new InMemoryCache(),
    }
);

export default client; 

//  Pero, tiene mejor interfaz y es más fácil de usar esta
//  https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/explorer,
//  simplemente como reseña de cara al examen si nos pide utilizar rick y morty, pero no tendría
//  que cambiar nada en el código