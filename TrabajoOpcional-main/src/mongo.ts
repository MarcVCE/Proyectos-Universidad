import { Db, MongoClient } from "mongodb";

export const connectDB = async (): Promise<Db> => {
  const mongouri = "{url de conexión a MongoDB}";

  const client = new MongoClient(mongouri);

  try {
    await client.connect();

    return client.db();
  } catch (e) {
    throw e;
  }
};