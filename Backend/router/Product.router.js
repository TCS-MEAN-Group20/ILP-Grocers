let express = require('express');
let router = express.Router();
let productController = require('../controller/Product.controller')

router.post("/addProduct", productController.addProduct)
router.put("/updateProduct",productController.updateProduct)

module.exports=router