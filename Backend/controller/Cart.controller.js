let cartModel = require('../model/Cart.model')

let addCart = (request,response)=>{
    let newCart = request.body
    cartModel.insertMany(newCart, (err,result)=>{
        if(!err){
            response.send("cart created")
        }
        else{
            response.send(err)
        }
    })
}

let updateCart = (request,response)=>{
    let newCart = request.body
    cartModel.updateOne({uname:newCart.uname},{$set:{products:newCart.products}}, (err,result)=>{
        if(!err){
            response.send(result)
        }
        else{
            response.send(err)
        }
    })
}

let getCartInfoById = (request,resonse)=>{
    let cart = request.body
    cartModel.findOne({uname:cart.uname},(err,data)=>{
        if(!err){
            resonse.json(data)
        }
        else{
            resonse.json(err)
        }
    })
}

module.exports = {addCart, updateCart, getCartInfoById}