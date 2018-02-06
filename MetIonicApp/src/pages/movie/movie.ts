import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

//import { VideoPlayer, VideoOptions } from 'ionic-native/videoplayer';

// MUST be in project directory:
// cordova plugin add cordova - plugin - video - player
// npm install--save @ionic-native / video - player


@Component({
  selector: 'page-ticket',
  templateUrl: 'movie.html'
})
export class MoviePage {
  //videoOptions: VideoOptions;

  //constructor(public navCtrl: NavController, private videoPlayer: VideoPlayer) {
  constructor(public navCtrl: NavController) {
  }

  public playVideo() {
    //this.videoOptions = { volume: 1.0 };
    //this.videoPlayer.play('file:///Development\VS_2017\MetIonicApp\MetIonicApp\src\assets\ticket.mp4').then(() => {
    //  console.log('video completed');
    //}).catch(err => {
    //  console.log(err);
    //});
  }
  public stopPlayingVideo() {
    //this.videoPlayer.close();
  }

  onLink(url: string) {
    window.open(url);
  }
}
