import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ModalController,AlertController } from 'ionic-angular';



import {AdddronePage} from '../adddrone/adddrone';
import {SelectdroneP} from '../../providers/selectdrone/selectdrone';
import {ModaldronePage} from '../../pages/modals_drone/model_drone';
import {Drone_fixPage} from '../../pages/drone_fix/drone_fix';

/**
 * Generated class for the ManagedronePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-managedrone',
  templateUrl: 'managedrone.html',
})
export class ManagedronePage {
		work;
    buttonClicked: boolean;
  constructor(public modalCtrl : ModalController,public SelectdroneP : SelectdroneP,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

 adddrone(){
    this.navCtrl.push(AdddronePage);
  }
  openModal(work) {
    
        let modal = this.modalCtrl.create(ModaldronePage,work);
        modal.present();
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
