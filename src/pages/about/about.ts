import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  firstname;
  lastname;
  phone;
  address;
  city;
  postcode;
  passport_number;
  email;
  id;
  username;
  constructor(public navCtrl: NavController,
              public navParams: NavParams ,
              public loadingCtrl :LoadingController,
            ) {

  }

}