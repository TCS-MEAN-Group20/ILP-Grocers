let mongoose = require('mongoose');

mongoose.pluralize(null);

let CartSchema = mongoose.Schema({
    products:{type:Array},
    uname:{type:String,unique:true},
    totalPrice:{type:Number}
});

let cartModel = mongoose.model("Cart",CartSchema);

module.exports = cartModel ;