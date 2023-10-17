const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

// URL de conexión a la instancia local de MongoDB
const mongoUrlAtlas = process.env.mongoUrlAtlas;

// Nombre de la base de datos y colección
const dbName = 'myProject';
const collectionName = 'usersProject';

// Declarar la variable client fuera del bloque try
let client;

// Función asincrónica para insertar datos
async function insertData() {
    try {
        // Crear una nueva instancia del cliente MongoDB
        client = new MongoClient(mongoUrlAtlas);

        // Conectar al servidor MongoDB
        await client.connect();

        // Obtener una referencia a la base de datos
        const db = client.db(dbName);

        // Datos a insertar en la colección
        const insertarDato = {
            nombre: 'Patrick',
            edad: 25,
            email: 'patrick@gmail.com',
            password: '1234'
        };

        //Create:Insertar un dato en la collection.

        // Insertar un documento en la colección
        const result = await db.collection(collectionName).insertOne(insertarDato);

        // Mostrar el ID del documento insertado
        console.log(`Insertamos un dato con ID: ${result.insertedId}`);
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

// Llamar a la función para insertar datos
insertData();
