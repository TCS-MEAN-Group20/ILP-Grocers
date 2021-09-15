let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let ProductSchema = mongoose.Schema({
    name:String,
    price:Number,
    description:{
        type:String,
        default:"description"
    }

});

let productModel = mongoose.model("product",ProductSchema);

module.exports = productModel ;