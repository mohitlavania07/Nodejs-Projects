const dbConnect = require('./mongoDb(connection)');

const updateData = async ()=>{
 let db = await dbConnect();
 let result = db.updateOne({

    //   Condition ... !

 })
 console.warn(result);
 if( result.acknowledged){
    console.log("Update the data...")
 }
}
updateData();