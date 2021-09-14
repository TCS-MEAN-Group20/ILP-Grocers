let orderModel = require("../model/Order.model");

let getAllOrderById = (request,response)=>{
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
    orderModel.insertMany(order,(err,data)=>{
        if(!err){
            //sucess
            response.send("successful");
        }
        else{
            response.send("error")
        }
    })
}

module.exports = {getAllOrderById, addOrder}