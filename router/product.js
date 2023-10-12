const express = require("express");
const productController = require("../controller/product");

const router = express.Router();

router
  .get("/", productController.getAllProduct)
  .get("/:id", productController.getProduct)
  .post("/", productController.postProduct)
  .put("/:id", productController.putProduct)
  .patch("/:id", productController.patchProduct)
  .delete("/:id", productController.deleteProduct);

exports.router = router;
