let express = require("express");
let router = express.Router();
let empController = require('../controller/Employee.controller');

router.post("/empSignIn", empController.signIn);
router.get("/getAllEmployees", empController.getAllEmpDetails);
router.delete("/deleteEmp/:uname",empController.deleteEmployee);
router.post("/storeEmp", empController.storeEmployee);
router.put("/changePassword", empController.updateEmpPassword)

module.exports=router;