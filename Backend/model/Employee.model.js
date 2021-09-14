let mongoose = require('mongoose');

mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({
    fname:{type:String},
    lname:{type:String},
    uname:{type:String,unique:true},
    password:{type:String}
});

let employeeModel = mongoose.model("Employee",employeeSchema);

module.exports=employeeModel;