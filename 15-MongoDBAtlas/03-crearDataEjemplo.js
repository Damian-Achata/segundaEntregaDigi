const dotenv = require('dotenv');
dotenv.config();


const {MongoClient} = require('mongodb'); 
//or import {MongoClient} from 'mongodb'

//connection URL 
const mongoUrlAtlas = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(mongoUrlAtlas);

const dbName = 'Myproject';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');
  
    // the following code examples can be pasted here...
  
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());