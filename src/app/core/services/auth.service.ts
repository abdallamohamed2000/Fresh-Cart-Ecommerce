import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    
  }
userData:any;
baseUrl:string ='https://ecommerce.routemisr.com/api/v1/auth/';
  

  setRegister(userData: Object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signup', userData);
  }

  setLogin(userData: Object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signin', userData);
  }

  saveUserData(){
    if(localStorage.getItem('eToken') !=null){
      let encodeToken:any =localStorage.getItem('eToken');
      let decodeToken = jwtDecode(encodeToken);
      this.userData = decodeToken;
      
      
    }
  }


}
