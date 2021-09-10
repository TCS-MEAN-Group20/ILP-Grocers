let empModel = require("../model/Employee.model");

//employee sign in page
let signIn = async (request,response)=>{
    let emp = request.body;
    let empInfo = await empModel.findOne({uname:emp.uname, password:emp.password});
    if(empInfo != null){
        response.send("sucess")
    }
    else{
        response.send("Invalid Username or Password")
    }
}

//display all employees to be called by ADMIN
let getAllEmpDetails = (request,response)=>{
    empModel.find({},(err,data)=>{
        if(!err){
            //sucess
            response.json(data);
        }else {
            //fail
             response.json(err);   
        }
    })
}

//"sign up" employee called by ADMIN
let storeEmployee = (request,response) =>{
    let emp = request.body;
    empModel.insertMany(emp, (err,result)=>{
        if(!err){
            //sucess
            response.send("successful");
        }
        else{
            //not a unique id
            console.log("hitt2");
            response.send(err)
        }
    })
}

//delete emp from database to be called by ADMIN
let deleteEmployee = (request,response)=>{
    let eid = request.params.eid;
    empModel.deleteOne({_id:eid},(err,result)=>{
        if(!err){
            response.send(result)
        }else {
            response.send(err);
        }
    })
}

module.exports={getAllEmpDetails,storeEmployee,deleteEmployee,signIn}