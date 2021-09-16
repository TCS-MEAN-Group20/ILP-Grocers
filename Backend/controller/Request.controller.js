let requestModel = require("../model/Request.model");

let getRequests = (request,response)=>{
    requestModel.find({},(err,data)=>{
        if(!err){
            //sucess
            response.json(data);
        }else {
            //fail
             response.json(err);   
        }
    })
}

let addRequest = (request,response)=>{
    let req = request.body
    requestModel.insertMany(req,(err,data)=>{
        if(!err){
            //sucess
            response.send("successful");
        }
        else{
            response.send("error")
        }
    })
}
module.exports = {getRequests,addRequest};
