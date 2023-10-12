require("dotenv").config();
const express = require("express");
const productRouter = require("./router/product");
const userRouter = require("./router/user");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path')
console.log("env", process.env.DB_PASSWORD);

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})


/////db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("database connected");
}

server.listen(8080, () => {
  console.log("Server Started");
});
