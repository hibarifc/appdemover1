import { Component, } from '@angular/core';
import {  NavParams,} from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { LoadingController, ModalController, AlertController } from 'ionic-angular';
import {ModelP} from '../../providers/model/model' ;
import {Drone_fixP} from '../../providers/drone_fix/drone_fix';
import {MenuPage} from '../menu/menu'

@Component({
    templateUrl: 'drone_fix.html',
    providers: [ModelP,Drone_fixP]
    
  })
  export class Drone_fixPage {
  date: string;
  size: number;
  price: number;
  name: string;
  drone_id: any;
  users_id: any;
  work;
  work1;
      buttonClicked: boolean;
  
  
    constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController,
      public ModelP:ModelP,
      public modalCtrl: ModalController,
      public loadingCtrl: LoadingController,
      public drone_fixP : Drone_fixP,
      public alertCtrl1: AlertController,
    ) 
    {
     this.work = this.params.get('charNum');
    //  this.drone_id = this.work.drones_detail_id[0];
    }
    ionViewWillEnter() {
      
        console.log(this.date );
    }
    
    dismiss() {
      this.viewCtrl.dismiss();
    }
    enterdronefix(){
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
         spinner: 'dots'
      });
          let drone ={
            users_id : localStorage.getItem('userid'),
            drone_id : localStorage.getItem('drone_id'),
            name : this.name,
            size : this.size,
            price : this.price,
            date :  (new Date()).toISOString(),
          }
          // console.log(drone);
          loader.present();
              let promise;
              promise = this.drone_fixP.saveDro(drone);
              // console.log(users_id);
              promise.then((data: any) => {
                // console.log(data);
                if (data.ok) {
                  let alert = this.alertCtrl1.create({
                    title: 'สมัครDrone',
                    subTitle: 'ข้อมูอDroneครบถ้วน',
                    buttons: ['ok']
                });
                alert.present();    
                localStorage.removeItem('drone_id');
                loader.dismiss();
                let modal = this.modalCtrl.create(MenuPage);
                modal.present();
                }
                else{               
                  loader.dismiss();
                  let modal = this.modalCtrl.create(MenuPage);
                  modal.present();
                }
              // ===================================
              }, (error) => {
                loader.dismiss();
                let modal = this.modalCtrl.create(MenuPage);
                modal.present();
                // console.log("ข้อมูอDrone failed");

              });                         
  }
   
  }
