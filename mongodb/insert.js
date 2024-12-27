const dbConnect = require('./mongoDb(connection)');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertOne({
        name: 'Raja lavania', address : 'Ghaziabad', pincode : '201901' 
    })
    console.log(result); 
}
insert();