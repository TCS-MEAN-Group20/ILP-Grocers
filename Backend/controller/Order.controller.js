let orderModel = require("../model/Order.model");

let getAllOrders = (request,response)=>{
    orderModel.find((err,data)=>{
        if(!err){
            //success
            response.json(data);
        }else {
            //fail
             response.json(err);   
        }
    })
}

let getAllOrdersById = (request,response)=>{
    let user = request.body
    orderModel.find({uname:user.uname},(err,data)=>{
        if(!err){
            //sucess
            response.json(data);
        }else {
            //fail
             response.json(err);   
        }
    })
}

let addOrder = (request,response)=>{
    let order = request.body
    console.log(order);
    orderModel.insertMany(order,(err,data)=>{
        if(!err){
            response.send("successful");
        }
        else{
            response.send("error")
        }
    })
}

let updateOrderStatus = (request,response)=>{
    let orderObj = request.body
    orderModel.updateOne({order:orderObj.order},{$set:{status:orderObj.status}}, (err,result)=>{
        if(!err){
            response.send("Order Updated")
        }
        else{
            response.send("error")
        }
    })
}

module.exports = {
    getAllOrders, 
    getAllOrdersById, 
    addOrder,
    updateOrderStatus
}