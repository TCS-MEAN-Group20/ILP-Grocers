let empModel = require("../model/Employee.model");

//employee sign in page
let signIn = async (request,response)=>{
    let emp = request.body;
    //console.log(emp);
    let empInfo = await empModel.findOne({uname:emp.uname, password:emp.password});
    if(empInfo != null){
        response.send("success")
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

let updateEmpPassword = (request,response)=>{
    let emp = request.body;
    empModel.updateOne({uname:emp.uname},{$set:{password:emp.password}}, (err,result)=>{
        if(!err){
            response.send("Password Updated")
        }
        else{
            response.send("error")
        }
    })
}

module.exports={getAllEmpDetails,storeEmployee,deleteEmployee,signIn,updateEmpPassword}