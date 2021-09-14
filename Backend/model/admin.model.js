let mongoose = require("mongoose");

mongoose.pluralize(null);

let adminSchema = mongoose.Schema({
    username:{type:String,unique:true},
    password:{type:String}
});

let adminModel = mongoose.model("Admin",adminSchema);

module.exports=adminModel;
