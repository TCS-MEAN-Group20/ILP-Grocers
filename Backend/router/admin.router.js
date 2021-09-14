let express = require("express");
let router = express.Router();
let adminController = require("../controller/admin.controller");


router.post("/signIn",adminController.signIn);
router.post("/signUp",adminController.signUp);

module.exports=router;