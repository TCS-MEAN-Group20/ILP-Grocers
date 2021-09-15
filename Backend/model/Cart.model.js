let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let CartSchema = mongoose.Schema({
    products:{type:Array},
    uname:{type:String}
});

let cartModel = mongoose.model("cart",CartSchema);

module.exports = cartModel ;