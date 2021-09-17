import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-ticket',
  templateUrl: './user-ticket.component.html',
  styleUrls: ['./user-ticket.component.css']
})
export class UserTicketComponent implements OnInit {

  msg1?: string;
  msg2?: string;

  constructor(
    public ticketService:TicketService
  ) { }

  ngOnInit(): void {
  }

  storeTicket(ticketRef: NgForm) {
    let ticket = ticketRef.value;
    if (ticket.username != "" && ticket.reason != "") {
      let user = (<HTMLInputElement>document.getElementById("username"));
      user.value = "";
      let reason = (<HTMLInputElement>document.getElementById("reason"));
      reason.value = "";
      let msg3 = (<HTMLInputElement>document.getElementById("confirm"));
      msg3.innerHTML = "Ticket Sent"
      this.ticketService.updateTicket(ticket).subscribe(
        result=>console.log(result),
        error=>console.log(error)
      );
    }

    if (ticket.username === '') {
      this.msg1 = 'Invalid input';
    }else {
      this.msg1 = '';
    }

    if (ticket.reason === '') {
      this.msg2 = 'Invalid input';
    }else {
      this.msg2 = "";
    }
  }

}
