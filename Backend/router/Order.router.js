let express = require("express");
let router = express.Router();
let orderController = require('../controller/Order.controller');

router.post("/getAllOrdersById",orderController.getAllOrderById)
router.post("/addOrder",orderController.addOrder)
router.put("/updateCart",orderController.updateCart)
router.post("/deleteCart",orderController.deleteCart)
router.post("/checkOutCart",orderController.checkOut)
router.post("/getCart",orderController.getCart)

module.exports = router