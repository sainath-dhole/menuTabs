import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import * as firebase from 'firebase';
import firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    const firebaseConfig = {
      //conif your firebase
      apiKey: "AIzaSyDIVjpH-Q2jKOgROt2wzBx21LXY5JpmQfU",
    authDomain: "fireshop-49226.firebaseapp.com",
    projectId: "fireshop-49226",
    storageBucket: "fireshop-49226.appspot.com",
    messagingSenderId: "865362842325",
    appId: "1:865362842325:web:90debd2eec07a3b861485c",
    measurementId: "G-G5T26GJH6S"
    };
    firebase.initializeApp(firebaseConfig);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
