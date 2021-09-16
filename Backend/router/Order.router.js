let express = require("express");
let router = express.Router();
let orderController = require('../controller/Order.controller');

router.get("/getAllOrders",orderController.getAllOrders);
router.post("/getAllOrdersById",orderController.getAllOrdersById);
router.post("/addOrder",orderController.addOrder);
router.put("/updateOrderStatus",orderController.updateOrderStatus);

module.exports = router;