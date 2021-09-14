let express = require("express");
let router = express.Router();
let userController = require('../controller/User.controller')

router.post('/userSignIn',userController.signIn);
router.post('/createUser',userController.storeUser);

module.exports=router;