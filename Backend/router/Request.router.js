let express = require("express");
let router = express.Router();
let reqController = require('../controller/Request.controller');

router.post("/addRequest",reqController.addRequest);

module.exports = router;