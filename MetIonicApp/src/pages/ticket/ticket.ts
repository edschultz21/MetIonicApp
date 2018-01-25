import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html'
})
export class TicketPage {

  constructor(public navCtrl: NavController) {
    
  }
  
  onLink(url: string) {
      window.open(url);
  }
}
