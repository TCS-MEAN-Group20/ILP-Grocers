let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let routerEmp = require("./router/Employee.router");
let routerUser = require("./router/User.router")
let routerOrder = require("./router/Order.router")
let adminRouter = require("./router/admin.router")
let routerCart = require("./router/Cart.router")
let routerProduct = require("./router/Product.router")
let routerReq = require("./router/Request.router")
let routerTicket = require("./router/Ticket.router")

let app = express();

app.use(cors());
app.use(bodyParser.json())

let url = "mongodb+srv://group20-admin:meanstack@cluster0.klcs8.mongodb.net/groceryDB"

mongoose.connect(url).then(res=>console.log("connected to db")).
catch(error=>console.log(error))

//http://localhost:9090/api/emp/empSignIn
//http://localhost:9090/api/emp/getAllEmployees
//http://localhost:9090/api/emp/deleteEmp/:uname
//http://localhost:9090/api/emp/storeEmp
//http://localhost:9090/api/emp/changePassword
app.use("/api/emp",routerEmp);

//http://localhost:9090/api/req/addRequest
//http://localhost:9090/api/req/getRequest
//http://localhost:9090/api/req/delRequest/:name
app.use("/api/req",routerReq);

//http://localhost:9090/api/ticket/getTickets
//http://localhost:9090/api/ticket/unblockUser
app.use("/api/ticket",routerTicket);

//http://localhost:9090/api/user/userSignIn
//http://localhost:9090/api/user/createUser
//http://localhost:9090/api/user/getUserDetailsById
//http://localhost:9090/api/user/updateUserFunds
app.use("/api/user",routerUser);

//http://localhost:9090/api/order/getAllOrders
//http://localhost:9090/api/order/getAllOrdersById
//http://localhost:9090/api/order/addOrder
//http://localhost:9090/api/order/updateOrderStatus
app.use("/api/order",routerOrder);

//"http://localhost:9090/api/admin/signIn"
app.use("/api/admin",adminRouter);

//http://localhost:9090/api/cart/addCartUponNewUser
//http://localhost:9090/api/cart/updateCartOnItem
//http://localhost:9090/api/cart/getCartDetails
app.use("/api/cart",routerCart);

//http://localhost:9090/api/product/addProduct
//http://localhost:9090/api/product/deleteProduct/:name
//http://localhost:9090/api/product/updateProduct
//http://localhost:9090/api/product/getAllProducts
app.use('/api/product',routerProduct)

app.listen(9090,()=>console.log("Server running on port number 9090"))