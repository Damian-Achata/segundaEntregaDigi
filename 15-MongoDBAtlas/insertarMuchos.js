const {MongoClient} = require('mongodb');
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
        //Para insertar varios datos, se utiliza un array
        const insertarDato = [
            {
                nombre: 'Nestor',
                edad: 25,
                email: 'keiri@gmail.com',
                password: 'arraigo77'
            },
            {
                nombre: 'eliaz',
                edad: 25,
                email: 'juan@gmail.com',
                password: '1234'
            },
            {
                nombre: 'Patrick',
                edad: 25,
                email: 'juan@gmail.com',
                password: '1234'
            },
            {
                nombre: 'Gustavo',
                edad: 25,
                email: 'juan@gmail.com',
                password: '1234'
            }
        ];

        //Create:Insertar un dato en la collection.

        // Insertar un documento en la colección
        //Para insertar varios solo cambia el metodo de insertOne a insertMany
        const result = await db.collection(collectionName).insertMany(insertarDato);

        // Mostrar el ID del documento insertado
        //Con res.insertCount me va a contar la cantidad de datos agregados
        console.log(`Insertamos ${result.insertedCount} datos!!`);
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
