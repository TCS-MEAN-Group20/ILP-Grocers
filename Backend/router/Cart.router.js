let express = require('express')
let router = express.Router()
let cartController = require('../controller/Cart.controller')

router.post('/addCartUponNewUser',cartController.addCart);
router.put('/updateCartOnItem', cartController.updateCart);
router.post('/getCartDetails', cartController.getCartInfoById);

module.exports=router