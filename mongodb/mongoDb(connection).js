
   // CONNECTION SERVER FOR FIND, INSERT, UPDATE & DELETE... 

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'index'

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('playlist'); 
}
module.exports = dbConnect;