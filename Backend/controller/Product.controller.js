let productModel = require('../model/Product.model');

let addProduct = (request,response)=>{
    let product = request.body
    productModel.insertMany(product, (err,result)=>{
        if(!err){
            response.send("success")
        }
        else{
            response.send("Product Name Already exsists")
        }
    })
}

let updateProduct = (request, response)=>{
    let product = request.body
    productModel.updateOne({name:product.name}, {$set:
        {
        imgUrl:product.imgUrl, 
        price:product.price, 
        quantity:product.quantity
    }}, (err,result)=>{
        if(!err){
            response.send(result)
        }
        else{
            response.send(response)
        }
    })
}

module.exports={addProduct, updateProduct}