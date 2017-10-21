import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController,ModalController } from 'ionic-angular';

import { MainP}from '../../providers/main/main';
import { ModelReviewPage}from '../../pages/model-review/model-review';


/**
 * Generated class for the ViewprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewprofile',
  templateUrl: 'viewprofile.html',
  providers :[MainP]
})
export class ViewprofilePage {
	userdata;
	firstname;
	lastname;
	address;
	city;
	id;
	review;
	ratingavg;
  constructor(
  	public MainP: MainP,
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public loadingCtrl: LoadingController,
  	public modalCtrl: ModalController,

  	) {

  }
	
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewprofilePage');
     this.userdata = this.navParams.get('charNum'),
    console.log(this.userdata.ratingavg);
    this.firstname = this.userdata.firstname;
    this.lastname = this.userdata.lastname;
    this.address = this.userdata.address;
    this.city = this.userdata.city;
    this.id = this.userdata.id;

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
    let body= {
      users_id_ranter : this.userdata.id
    }
    console.log(body);
    this.MainP.getWorkreview(body)
    .then((data : any) => { 
       if (data.ok) {
            this.review = data.status;
            this.ratingavg = this.review[0].ratingavg;
            console.log(this.ratingavg);

         }
       loader.dismiss();

    }, (error) => {
       loader.dismiss();
    });

  }
  openModal(data:any){
  	let modal = this.modalCtrl.create(ModelReviewPage,data);
    modal.present();
  }
}
