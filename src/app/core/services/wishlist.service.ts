import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  baseUrl:string='https://ecommerce.routemisr.com/api/v1/';
  
  wishListNumber:BehaviorSubject<number> = new BehaviorSubject(0);


  constructor(private _HttpClient:HttpClient) { }

  addToWishList(prodId:string|undefined):Observable<any>
  {
      return this._HttpClient.post(this.baseUrl + `wishlist`,
      {
        productId: prodId
    } 
      );
  }

  getWishList():Observable<any>
  {
      return this._HttpClient.get(this.baseUrl + `wishlist`);
  }
  removeWishList(prodId:string|undefined):Observable<any>
  {
      return this._HttpClient.delete(this.baseUrl + `wishlist/${prodId}`);
  }

}
