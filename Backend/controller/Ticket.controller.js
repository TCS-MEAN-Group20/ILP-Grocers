let ticketModel = require("../model/Ticket.model");
let userModel = require("../model/User.model");


let getTickets = (request,response)=>{
    ticketModel.find({},(err,data)=>{
        if(!err){
            //sucess
            response.json(data);
        }else {
            //fail
             response.json(err);   
        }
    })
}

let unblockUser = (request,response)=>{
    let name = request.params.username;
    ticketModel.deleteOne({username:name},(err,result)=>{
        if(!err){
            userModel.updateOne({uname:name},{$set:{password:"reset"}}, (err,result)=>{
                if(!err){
                    response.send("Ticket resolved")
                }
                else{
                    response.send("error")
                }
            })
        }else {
            response.send("error");
        }
    }) 
    
}
module.exports = {getTickets, unblockUser};