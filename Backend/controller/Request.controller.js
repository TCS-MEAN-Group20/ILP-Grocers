let requestModel = require("../model/Request.model");

let getRequests = (request,response)=>{
    requestModel.find({},(err,data)=>{
        console.log("getRequest");
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

let deleteRequest = (request,response)=>{
    let rName = request.params.name;
    requestModel.deleteOne({productName:rName},(err,result)=>{
        if(!err){
            response.send(result)
        }else {
            response.send(err);
        }
    })
}

module.exports = {getRequests,addRequest,deleteRequest};
