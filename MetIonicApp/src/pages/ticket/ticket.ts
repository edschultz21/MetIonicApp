import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MoviePage } from "../../pages/movie/movie";

@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html'
})
export class TicketPage {

  constructor(public navCtrl: NavController) {
    
  }

  goToMovie() {
    this.navCtrl.setRoot(MoviePage);
  }

  onLink(url: string) {
      window.open(url);
  }
}
