import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';



import {AdddronePage} from '../adddrone/adddrone';
import {SelectdroneP} from '../../providers/selectdrone/selectdrone';



/**
 * Generated class for the DroneallPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-droneall',
  templateUrl: 'droneall.html',
  providers: [SelectdroneP]
})
export class DroneallPage {
	work;
    buttonClicked: boolean;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public loadingCtrl: LoadingController,
  	public SelectdroneP : SelectdroneP,



  	) {
  }
adddrone(){
    this.navCtrl.push(AdddronePage);
  }
  
  gotodrone(){
    
  }

   presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
    var userid = localStorage.getItem('userid');
    let user= {
      users_id : userid
    }
    this.SelectdroneP.getDroneall(user)
    .then((data : any) => { 
       if (data.ok) {
            this.work = data.status;
         }
       loader.dismiss();

    }, (error) => {
       loader.dismiss();
    });
  }
  ionViewWillEnter() {
      this.presentLoading();
      
  
    
  }


}
