import { Component, } from '@angular/core';
import {  NavParams,} from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { LoadingController, ModalController } from 'ionic-angular';
// import { HttpModule,Http } from '@angular/http';
// import {ModelP} from '../../providers/model/model' ;
import {Drone_fixPage } from '../drone_fix/drone_fix';
import {Drone_fixP } from '../../providers/drone_fix/drone_fix';


// import { MenuPage } from '../../pages/menu/menu';

@Component({
  templateUrl: 'modal_drone.html',
  providers: [Drone_fixP],
  
})
export class ModaldronePage {
    work;
    buttonClicked: boolean;


  constructor(
    public Drone_fixP : Drone_fixP,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    // public ModelP:ModelP,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) 
  {
   this.work = this.params.get('charNum');
   console.log(this.work);
  }
  modifydrone(work){
    localStorage.setItem('drone_id',this.work.drones_detail_id)
    // console.log(work);
    let modal = this.modalCtrl.create(Drone_fixPage,work);
    modal.present();
  
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  deleteDrone(){
      let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
    var usersid = localStorage.getItem('userid');
    var droneid = this.work.id;
    let body = {
      users_id : usersid,
      drone_id : droneid

    }
    console.log(body);
    this.Drone_fixP.deLetedrone(body)
    .then((data : any) => { 
       if (data.ok) {
            this.work = data.status;
         }
       loader.dismiss();

    }, (error) => {
       loader.dismiss();
    });
  }


   ionViewDidLoad() {
  
  //  console.log(this.work)
   var  dronetypr = localStorage.getItem('type');

    // console.log(dronetypr);

    if(dronetypr=='2'){
      this.buttonClicked = !this.buttonClicked;
    }
   
 
   
  }
}