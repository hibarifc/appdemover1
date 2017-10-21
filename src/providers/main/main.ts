import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MainP {
 

  constructor(public http: Http, @Inject('API_URL') public url: string) { 
  
  }

  getWork( body: any) {
    // console.log(user_id);
    return new Promise((resolve, reject) => {
      // let headers = new Headers({
      //   'Content-Type': 'application/x-www-form-urlencoded', 
      // });
      // let options = new RequestOptions({ headers: headers });
      // let body = {
      //   usersid : userid,
      //   workstatus_id1 : userid.workstatus_id1,
      //   workstatus_id2 :  userid.workstatus_id2,
      //   date :  (new Date().toLocaleString()),
      // };
      console.log(body)
      this.http.post(`${this.url}/work/getwork`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }
  
   getWorkreview( body: any) {
    // console.log(user_id);
    return new Promise((resolve, reject) => {
      // let headers = new Headers({
      //   'Content-Type': 'application/x-www-form-urlencoded', 
      // });
      // let options = new RequestOptions({ headers: headers });
      // let body = {
      //   usersid : userid,
      //   workstatus_id1 : userid.workstatus_id1,
      //   workstatus_id2 :  userid.workstatus_id2,
      //   date :  (new Date().toLocaleString()),
      // };
      console.log(body)
      this.http.post(`${this.url}/work/getworkreview`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }


  addToken(user_id:any,token:any){
    return new Promise((resolve, reject) => {
      // let headers = new Headers({
      //   'Content-Type': 'application/x-www-form-urlencoded', 
      // });
      // let options = new RequestOptions({ headers: headers });
      let body = {
        usersid : user_id,
        token : token,
        date :  (new Date().toLocaleString()),
        
      };
      this.http.post(`${this.url}/user/addtoken`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }

 
}