let reqModel = require("../model/Request.model");

let addRequest = (request,response)=>{
    let req = request.body
    reqModel.insertMany(req,(err,data)=>{
        if(!err){
            response.send("successful");
        }
        else{
            response.send("error")
        }
    })
}

module.exports = {
    addRequest
}