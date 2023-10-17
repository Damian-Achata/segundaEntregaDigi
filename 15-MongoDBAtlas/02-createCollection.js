const dotenv = require('dotenv');
dotenv.config();

// Importamos el módulo de cliente de MongoDB para la conexión
const { MongoClient } = require('mongodb');

// Crear una función asincrónica para conectar a la base de datos
async function connectToMongoDB() {
    let client;
    try {
      const mongoUrlAtlas = process.env.mongoUrlAtlas;
      client = new MongoClient(mongoUrlAtlas);
      await client.connect();
  
      const dbName = client.db('myProject');
      const collectionName = 'usersProject';
  
      // Realiza operaciones con la base de datos y la colección
  
      console.log(`Creación de la colección ${collectionName} exitosa!!`);
    } catch (err) {
      console.error('Error al conectar o crear la colección:', err);
    } finally {
      if (client) {
        client.close();
        console.log('Conexión cerrada.');
      }
    }
  }

// Llamar a la función para conectar y crear la colección
connectToMongoDB();


