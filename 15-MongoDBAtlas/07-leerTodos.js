const { MongoClient } = require('mongodb');
const { config } = require('dotenv');
config()


// URL de conexión a la instancia local de MongoDB
const mongoUrlAtlas = process.env.mongoUrlAtlas;

// Nombre de la base de datos y colección
const dbName = 'myProject';
const collectionName = 'usersProject';

// Declarar la variable client fuera del bloque try
let client;

// Función asincrónica para insertar datos
async function readData() {
    try {
        // Crear una nueva instancia del cliente MongoDB
        client = new MongoClient(mongoUrlAtlas);

        // Conectar al servidor MongoDB
        await client.connect();

        // Obtener una referencia a la base de datos
        const db = client.db(dbName);

        //READ: Leemos datos de la collection.


        // Leer un documento en la colección
        const result = await db.collection(collectionName).find().toArray();

        //Archivo a json para que sean legibles los datos. -Esto se utiliza para testear el funcionamiento.
        let data = JSON.stringify(result)

        // Mostrar los datos de la collection
        console.log(`Encontramos los datos: ${data} `);
    } catch (err) {
        // Capturar y mostrar errores en la consola
        console.error(err);
    } finally {
        // Asegurarse de cerrar la conexión, incluso si hay errores
        if (client) {
            client.close();
        }
    }
}

// Llamar a la función para leer datos
readData();
