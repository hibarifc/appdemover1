import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ModelReviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model-review',
  templateUrl: 'model-review.html',
})
export class ModelReviewPage {
	data;
	firstname;
	lastname;
	ratting;
	date;
	review;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,) {
  	this.data = this.navParams.get('charNum');
  	this.firstname = this.data.firstname;
  	this.lastname = this.data.lastname;
  	this.ratting = this.data.rating;
  	this.review = this.data.review;
  	console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelReviewPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
