/*
-Iniciar un proyecto con Node (npm init)
-Instalar mongoDB
-La base de datos en Mongo no se registra hasta que tenga una coleccion
-Una coleccion es como una carpeta para guardar los documentos(los datos que se guardan en la db)
*/

//ESTE CODIGO NO CONECTA POR ALGUN MOTIVO
// const { MongoClient } = require('mongodb'); // Importa MongoClient desde el módulo mongodb

// // Crea una URL para la conexión local
<<<<<<< HEAD
// const mongoUrlLocal = 'mongo local'; // Agrega el puerto (por defecto, 27017)

// // Crea una URL para la conexión remota (Atlas)
// const mongoUrlAtlas = 'url de la database remota';
=======
// const mongoUrlLocal = 'url local de la db'; // Agrega el puerto (por defecto, 27017)

// // Crea una URL para la conexión remota (Atlas)
// const mongoUrlAtlas = 'url de la database remota';
>>>>>>> 8f027130adf099b9260ac2ee05e485a4ff232e1a

// // Utiliza el método MongoClient.connect para conectarte a la base de datos
// MongoClient.connect(mongoUrlLocal, (err, client) => {
//   // Si hay un error, lanza el error
//   if (err) {
//     console.error('Error al conectar a la base de datos:', err);
//     return;
//   }

//   // Si no hay errores, la conexión es exitosa
//   console.log('Conexión a la base de datos exitosa!!!');

//   // Cierra la conexión después de realizar las operaciones necesarias
//   client.close();
// });

//ESTE CODIGO FUNCIONA
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const mongoUrlAtlas = process.env.mongoUrlAtlas;
const client = new MongoClient(mongoUrlAtlas);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
