
//   Basic Connection of MongoDb...!

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'index'

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('playlist');
    let response = await collection.find({}).toArray()
    console.log(response);
}

getData();