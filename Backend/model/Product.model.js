let mongoose = require('mongoose');

mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    name:{type:String,unique:true},
    price:{type:Number},
    quantity:{type:Number},
    imgUrl:{type:String}
});

let productModel = mongoose.model("Product",productSchema);

module.exports=productModel;