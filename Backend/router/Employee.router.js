let express = require("express");
let router = express.Router();
let empController = require('../controller/Employee.controller');

router.post("/empSignIn", empController.signIn);
router.get("/getAllEmployees", empController.getAllEmpDetails);
router.delete("/deleteEmp/:eid",empController.deleteEmployee);
router.post("/storeEmp", empController.storeEmployee);

module.exports=router;