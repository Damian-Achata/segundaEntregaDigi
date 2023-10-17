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

        //db.users.find();
        let buscado = {
            nombre: 'Patrick'
        }

        // Leer un documento en la colección
        const result = await db.collection(collectionName).findOne(buscado);

        // Mostrar el dato que buscamos.
        console.log(`Encontramos el dato : ${result._id} ${result.nombre} ${result.email}`);
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
