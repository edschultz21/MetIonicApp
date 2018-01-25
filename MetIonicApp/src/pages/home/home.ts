import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TicketPage } from "../../pages/ticket/ticket";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToTicket() {
    this.navCtrl.setRoot(TicketPage);
  }

  onLink(url: string) {
      window.open(url);
  }
}
