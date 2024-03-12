import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

baseUrl:string='https://ecommerce.routemisr.com/api/v1/';
//34an tekon shared 3la kol el components
cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);


  addToCart( productId:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 'cart',
    { 
      "productId": productId
    }
    
    )
  }

  getUserCart():Observable<any>{
    return this._HttpClient.get(this.baseUrl + 'cart')
    
  }

  removeItem(productId:string):Observable<any>{
    return this._HttpClient.delete(this.baseUrl +`cart/${productId}`)
  }
  clearCart():Observable<any>{
    return this._HttpClient.delete(this.baseUrl +'cart')
  }

  updateCart(productId:string, count:number):Observable<any>{
    return this._HttpClient.put(this.baseUrl +`cart/${productId}`,
    {
      "count":count
    }
    )
  }
  checkOut(cartId:string, userData:object):Observable<any>{
    return this._HttpClient.post(
      this.baseUrl + `orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {
      shippingAddress: userData
    }
    )
  }
}
