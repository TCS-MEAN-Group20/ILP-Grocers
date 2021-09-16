let express = require("express");
let router = express.Router();
let ticketController = require('../controller/Ticket.controller')

router.get("/getTickets",ticketController.getTickets)
router.delete("/unblockUser/:username",ticketController.unblockUser)
router.post("/blockUser",ticketController.blockUser)

module.exports = router;