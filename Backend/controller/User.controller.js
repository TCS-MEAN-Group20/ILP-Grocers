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

module.exports={signIn,storeUser}