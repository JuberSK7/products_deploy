const model = require("../model/product");
const Product = model.Product;
const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

exports.getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  console.log(id);
  const product = await Product.findById(id);
  res.json(product);
};
exports.postProduct = (req, res) => {
  const product = new Product(req.body);
  // product.title = 'PhoneX';
  // product.price=99999;
  // product.rating = 5;
  product
    .save()
    .then((doc) => {
      res.status(201).json(doc);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  // console.log(req.body);
  // products.push(req.body);
};
exports.putProduct = async (req, res) => {
  const id = req.params.id;
  const doc = await Product.findOneAndReplace({ _id: id }, req.body);
  res.status(201).json(doc);
};
exports.patchProduct = async (req, res) => {
  const id = req.params.id;
  const doc = await Product.findOneAndUpdate({ _id: id }, req.body);
  res.status(201).json(doc);
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
