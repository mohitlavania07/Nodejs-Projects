const dbConnect = require('./mongoDb(connection)');

const deleteData = async ()=>{
 let db = await dbConnect();
 let result = db.deleteOne({

    //   Condition ... !

 })
 console.warn(result);
 if( result.acknowledged){
    console.log("Delete the data...")
 }
}
deleteData();