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
   let data = await Product.findOne({
     name:"Mohit"
  });
  console.log(data);
}
main();



