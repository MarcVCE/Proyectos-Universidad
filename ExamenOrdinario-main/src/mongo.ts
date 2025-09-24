import { Db, MongoClient } from "mongodb";

export const connectDB = async (): Promise<Db> => {
  const mongouri = "mongodb+srv://MONGODB_USER:MONGODB_PWD@mongodbarquitectura.ddc2a.mongodb.net/MONGODB_NAME?retryWrites=true&w=majority";

  const client = new MongoClient(mongouri);

  try {
    await client.connect();

    return client.db();
  } catch (e) {
    throw e;
  }
};