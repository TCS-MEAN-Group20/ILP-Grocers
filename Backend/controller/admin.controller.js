let adminModel = require("../model/admin.model");

let signUp = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await adminModel.findOne({username:user.username});
    if(userInfo==null){
        let result = await adminModel.insertMany(user);
        response.send("Account created successfully");
    }else {
        response.send("Username must be unqiue");
    }    
}
let signIn = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await adminModel.findOne({username:user.username,password:user.password});
    if(userInfo!=null){
        response.send("Success");      
    }else {
        response.send("Invalid username or password");
    }
}


module.exports={signIn,signUp};