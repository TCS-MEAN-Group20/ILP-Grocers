let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let routerEmp = require("./router/Employee.router");

let app = express();

app.use(cors());
app.use(bodyParser.json())

let url = "mongodb://localhost:27017/groceryDb"

mongoose.connect(url).then(res=>console.log("connected to db")).
catch(error=>console.log(error))

//http://localhost:9090/api/emp/empSignIn
//http://localhost:9090/api/emp/getAllEmployees
//http://localhost:9090/api/emp/deleteEmp/:eid
//http://localhost:9090/api/emp/storeEmp
app.use("/api/emp",routerEmp);

app.listen(9090,()=>console.log("Server running on port number 9090"))