let mongoose = require('mongoose');

mongoose.pluralize(null);

let CartSchema = mongoose.Schema({
    products:{type:Array},
    uname:{type:String,unique:true}
});

let cartModel = mongoose.model("Cart",CartSchema);

module.exports = cartModel ;