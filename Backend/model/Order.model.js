let mongoose = require('mongoose');

mongoose.pluralize(null);

let orderSchema = mongoose.Schema({
    products:{type:Array},
    price:{type:Number},
    uname:{type:String},
    status:{type:String}
});

let orderModel = mongoose.model("Order",orderSchema);

module.exports=orderModel;