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
            userModel.updateOne({uname:name},{$set:{password:"reset",attempts:3}}, (err,result)=>{
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

let blockUser = (request,response)=>{
    let user = request.body
    ticketModel.insertMany(user, (err,result)=>{
        if(!err){
            response.send("ticket created")
        }
        else{
            response.send(err)
        }
    })
}

let updateTicket = (request,response)=>{
    let user = request.body
    ticketModel.updateOne({username:user.username},{$set:{reason:user.reason}}, (err,result)=>{
        if(!err){
            response.send("ticket created")
        }
        else{
            response.send(err)
        }
    })
}
module.exports = {getTickets, unblockUser, blockUser, updateTicket};