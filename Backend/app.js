let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let routerEmp = require("./router/Employee.router");
let routerUser = require("./router/User.router")
let routerOrder = require("./router/Order.router")
let adminRouter = require("./router/admin.router")

let app = express();

app.use(cors());
app.use(bodyParser.json())

let url = "mongodb+srv://group20-admin:meanstack@cluster0.klcs8.mongodb.net/groceryDB"

mongoose.connect(url).then(res=>console.log("connected to db")).
catch(error=>console.log(error))

//http://localhost:9090/api/emp/empSignIn
//http://localhost:9090/api/emp/getAllEmployees
//http://localhost:9090/api/emp/deleteEmp/:eid
//http://localhost:9090/api/emp/storeEmp
//http://localhost:9090/api/emp/changePassword
app.use("/api/emp",routerEmp);

//http://localhost:9090/api/user/userSignIn
//http://localhost:9090/api/user/createUser
//http://localhost:9090/api/user/getUserDetailsById
app.use("/api/user",routerUser);

//http://localhost:9090/api/order/getAllOrdersById
//http://localhost:9090/api/order/addOrder
app.use("/api/order",routerOrder);

app.use("/api/admin",adminRouter);

app.listen(9090,()=>console.log("Server running on port number 9090"))