const dbConnect = require('./mongoDb(connection)');

dbConnect().then((res)=>{
    res.find({name: "Mohit lavania"}).toArray().then((data)=>{ /* it search mohit lavania in db */
    console.warn(data)
    }) 
})                                                   
                                // Both Function Works same work...

// const main = async ()=>{
// let data = await dbConnect(); 
// data = await data.find({name: "Mohit lavania"}).toArray();
// console.warn(data);
// }
// main();


// dbConnect().then((res)=>{
//     res.find({name: "Ankush Sharma"}).toArray().then((data)=>{
//     console.warn(data);
//     })

// })