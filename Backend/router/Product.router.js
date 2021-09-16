let express = require('express');
let router = express.Router();
let productController = require('../controller/Product.controller')

router.post("/addProduct", productController.addProduct)
router.put("/updateProduct",productController.updateProduct)
router.get("/getAllProducts",productController.getAllProducts)
router.delete("/deleteProduct/:name",productController.deleteProduct);


module.exports=router