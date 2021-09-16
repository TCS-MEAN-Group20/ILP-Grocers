let express = require("express");
let router = express.Router();
let requestController = require('../controller/Request.controller')

router.post("/getRequests",requestController.getRequests)
router.post("/addRequest",requestController.addRequest)
router.delete("/delRequest/:name",requestController.deleteRequest)

module.exports = router;