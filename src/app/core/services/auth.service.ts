import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    
  }
userData:BehaviorSubject<any> = new BehaviorSubject(null);
baseUrl:string ='https://ecommerce.routemisr.com/api/v1/';
  

  setRegister(userData: Object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'auth/signup', userData);
  }

  setLogin(userData: Object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'auth/signin', userData);
  }

  saveUserData(){
    if(localStorage.getItem('eToken') !=null){
      let encodeToken:any =localStorage.getItem('eToken');
      let decodeToken = jwtDecode(encodeToken);
      this.userData.next(decodeToken);
      // console.log(this.userData);      
    }
  }

  updateLoggedUserData(userData: any) {
    return this._HttpClient.put( this.baseUrl +`users/updateMe`, userData)
  }

  updatePasswords(userPass: any) {
    return this._HttpClient.put(this.baseUrl + `users/changeMyPassword`, userPass)
  }


}
