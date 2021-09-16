let mongoose = require('mongoose');

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    fname:{type:String},
    lname:{type:String},
    email:{type:String,unique:true},
    phone:{type:String},
    address:{type:String},
    funds:{type:Number},
    uname:{type:String,unique:true},
    password:{type:String},
    attempts:{type:Number}
});

let userModel = mongoose.model("User",userSchema);

module.exports=userModel;