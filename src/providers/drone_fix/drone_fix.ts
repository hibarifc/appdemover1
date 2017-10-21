import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Drone_fixP {
 

  constructor(public http: Http, @Inject('API_URL') public url: string) { 
  

  }
  deLetedrone(body : any){
    return new Promise((resolve, reject) => {
      console.log(body);
      this.http.post(`${this.url}/drone/deletetdrone`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });

  }

  saveDro(drone : any)
  {
    return new Promise((resolve, reject) => {
      
      let body = {
       users_id : drone.users_id,
       drone_id : drone.drone_id,
       name: drone.name,
       size: drone.size,
       price : drone.price,
       date :  (new Date().toLocaleString()),
      };
      console.log(body);
      this.http.post(`${this.url}/drone/updatedronedetail`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }
  }

 

