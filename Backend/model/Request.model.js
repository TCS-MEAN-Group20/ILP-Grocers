let mongoose = require('mongoose');

mongoose.pluralize(null);

let requestSchema = mongoose.Schema({
    productName:{type:String},
    action:{type:String}
});

let reqModel = mongoose.model("Request",requestSchema);

module.exports=reqModel;