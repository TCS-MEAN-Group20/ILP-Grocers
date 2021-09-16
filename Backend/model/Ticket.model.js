let mongoose = require('mongoose');

let TicketSchema = mongoose.Schema({
    username:String,
    reason:String,
});

let TicketModel = mongoose.model("Ticket",TicketSchema);

module.exports = TicketModel;