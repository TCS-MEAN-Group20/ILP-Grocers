let express = require("express");
let router = express.Router();
let userController = require('../controller/User.controller');

router.post('/userSignIn',userController.signIn);
router.post('/createUser',userController.storeUser);
router.post('/getUserDetailsById', userController.getUserDetailsById);
router.post('/new-ticket',userController.raiseTicket);


module.exports=router;