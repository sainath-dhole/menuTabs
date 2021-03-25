import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import firebase from 'firebase/app';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
  spin: boolean = false;
  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  finishSetup() {
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    this.spin = true;

    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(() => {
      localStorage.setItem("name", name);
      this.nav.navigateRoot("/menu/first/tab1");
    }).catch(err => {
      alert(err);
    })
  }
}
