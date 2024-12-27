const express = require("express");
require("./config");
const Product = require("./product");
const cors = require("cors");
const User = require("./user");
const app = express();
const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm";

app.use(express.json());
app.use(cors()); 

app.post("/register",verifyToken, async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      res.send({
        result: "No user found with this email and password combination",
      });
    }
    res.send({ result, auth: token });
  });
  console.log(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send({
            result: "No user found with this email and password combination",
          });
        }
        res.send({ user, auth: token });
      });
    } else {
      res.send({
        result: "No user found with this email and password combination",
      });
    }
    console.warn(user);
  } else {
    res.send({ result: "Email and password are required fields" });
  }
});

app.post("/add-product",verifyToken, async (req, res) => {
  let products = new Product(req.body);
  let result = await products.save();
  res.send(result);
  console.log(result);
});

app.get("/products", async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.send(products);
  } else console.error("no product in the database");
});

app.delete("/product/:id", async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "Record Not Found...!!" });
  }
});

app.put("/product/:id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.get("/search/:key",verifyToken, async (req, res, verifyToken) => {
  let result = await Product.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});

function verifyToken(req, res, next) {
  let token = req.headers['authorization'];
  if (token) {
    token = token.split("")[1];

    console.log("middleware called", token);
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        res.status(401).send({ message: "Please provide valid Token" });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({ message: "Authorization Header is Missing" });
  }
  next();
}

app.listen(5000);
