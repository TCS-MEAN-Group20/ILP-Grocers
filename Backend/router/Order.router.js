let express = require("express");
let router = express.Router();
let orderController = require('../controller/Order.controller')

router.post("/getAllOrdersById",orderController.getAllOrderById)
router.post("/addOrder",orderController.addOrder)

module.exports = router