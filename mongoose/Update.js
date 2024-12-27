
// Update a document in the database by mongoose..

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/index');

  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });

  const main = async () => {
   let Product = mongoose.model("index",productSchema);
   let data = await Product.updateOne(
    {name :"Mohit",},
    { $set:{price: 379, brand : "Apple"} } /* updation in two fields */ 
)
  console.log(data);
}
main();
