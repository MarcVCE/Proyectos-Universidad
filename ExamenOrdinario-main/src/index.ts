import { ApolloServer, gql } from 'apollo-server';
import { connectDB } from './mongo';
import { Db, ObjectId } from "mongodb";

const typeDefs = gql`
  type Partido {
    nombre1:String!
    nombre2:String!
    resultado:String!
    minuto:Int!
    finalizado:Boolean!
  }

  type Respuesta {
     estado:String!
     mensaje: String!
     partido:[Partido]
     miunicopartido:Partido
  }

  type Query {
    listMatches:Respuesta!
    getMatch(id:ID!):Respuesta!
  }
  type Mutation{
    startMatch (nombre1:String,nombre2:String):Respuesta!
    setMatchData(id:ID!,resultado:String, minuto:Int,finalizado:Boolean):Respuesta!
  }
`;

type Context = { db: Db};
type GetMatchArgs = { id: string };
type startMatchArgs = {nombre1:string,nombre2:string};
type SetMatchDataArgs = {id:string,resultado:string, minuto:number,finalizado:boolean};
;

const resolvers = {

  Query: {
     listMatches: async (parent: unknown, args: unknown, context: Context) => {
      const db: Db = context.db;
      const partidos = await db.collection("Partidos").find({finalizado:false}).toArray();
      if (partidos) {
        return { estado: "SUCCESS", mensaje: "Partidos encontrados", partido: partidos };
      } else {
        return { estado: "ERROR", mensaje: "Partidos no encontrados" , partido: [] };
      }
    },

    getMatch: async (parent: unknown, args: GetMatchArgs, context: Context) => {
      const db: Db = context.db;
      const id = new ObjectId(args.id);
      const partido = await db.collection("Partidos").findOne( {_id: id} );
      if (partido) {
        return { estado: "SUCCESS", mensaje: "Partidos encontrados", miunicopartido: partido };
      } else {
        return { estado: "ERROR", mensaje: "Error 404" };
      }
    },

  },

  Mutation: {
    startMatch: async (parent: unknown, args: startMatchArgs, context: Context) => {
      const db: Db = context.db;
      const minombre1 = args.nombre1;
      const minombre2 = args.nombre2;
      const partido = await db.collection("Partidos").findOne( {nombre1:minombre1,nombre2:minombre2});
      if (!partido){
        const nuevopartido =  await db.collection("Partidos").insertOne({nombre1:minombre1,nombre2:minombre2,resultado:"0-0",
        minuto:0,finalizado:false});
        return { estado: "SUCCESS", mensaje: "Partido insertado" };
      } else {
        return { estado: "ERROR", mensaje: "Error 442" };
      }
    },

    setMatchData: async (parent: unknown, args: SetMatchDataArgs, context: Context) => {
      const db: Db = context.db;
      const id = new ObjectId(args.id);
      const resultado = args.resultado; 
      const minuto = args.minuto;
      const finalizado = args.finalizado;
      const partido = await db.collection("Partidos").findOne( {_id: id} );
      if (!partido){
        return { estado: "ERROR", mensaje: "Error 404" };
      } else if(partido){
          if(minuto < partido.minuto || partido.finalizado === true ){
            return { estado: "ERROR", mensaje: "Error 442" };
          }
      }else{
        const partidoactualizado = await db.collection("Partidos").updateOne({_id:id},{ $set:{_id:id,minuto:minuto,
          resultado:resultado,finalizado:finalizado}});
      }
    },

  },

};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: { req: { headers: any } }) => {
    let db;
    try {
      db = await connectDB();
    } catch (error) {
      console.log("--->error while connecting with graphql context (db)", error);
    }

    const token = req.headers.token || null;
    let usuario = null;

    if (db) {
      try {
        // Try to retrieve a user with the token
      } catch (e) {
        console.warn(`Unable to authenticate using auth token: ${token}`);
      }
    }

    // Add the user to the context
    return { db, usuario };
  },
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

