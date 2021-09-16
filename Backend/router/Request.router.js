let express = require("express");
let router = express.Router();
let requestController = require('../controller/Request.controller')

router.post("/getRequests",requestController.getRequests)
router.post("/addRequest",requestController.addRequest)

module.exports = router;