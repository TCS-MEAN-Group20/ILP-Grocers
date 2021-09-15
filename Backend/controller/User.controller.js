let userModel = require("../model/User.model")

let signIn = async (request,response)=>{
    let user = request.body;
    //console.log(emp);
    let userInfo = await userModel.findOne({uname:user.uname, password:user.password});
    if(userInfo != null){
        response.send("success")
    }
    else{
        response.send("Invalid Username or Password")
    }
}

let storeUser = (request,response)=>{
    let user = request.body;
    userModel.insertMany(user,(err,result)=>{
        if(!err){
            response.send("success")
        }
        else{
            response.send("User ID Already exsists")
        }
    })
}

let getUserDetailsById = (request,response)=>{
    let uname = request.body;
    userModel.findOne({uname:uname.uname},(err,data)=>{
        if(!err){
            response.json(data)
        }
        else{
            response.json(err)
        }
    })
}

let updateUserDetails = (request,response)=>{
    let user = request.body;
    userModel.updateOne({uname:user.uname},{$set:
        {
            funds:user.funds, 
            fname:user.fname,
            lname:user.lname,
            address:user.address,
            phone:user.phone,
            password:user.password,
        }}, (err,result)=>{
        if(!err){
            response.send(result)
        }
        else{
            response.send(err)
        }
    })
}

module.exports={signIn,storeUser,getUserDetailsById,updateUserDetails}