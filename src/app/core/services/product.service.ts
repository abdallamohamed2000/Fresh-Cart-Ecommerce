import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string='https://ecommerce.routemisr.com/api/v1/';
  getProducts(pageNum:number = 1):Observable<any>
  {
      return this._HttpClient.get(this.baseUrl + `products?page=${pageNum}`);
  }

  getProductsDetails(id:string):Observable<any>
  {
      return this._HttpClient.get(this.baseUrl+ `products/${id}`);
  }

  getCategories():Observable<any>
  {
      return this._HttpClient.get(this.baseUrl+'categories');
  }
  getCategoryDetails(id:string):Observable<any>
  {
      return this._HttpClient.get(this.baseUrl+ `categories/${id}`);
  }

  getSubCategoriesToCat(id: string): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `categories/${id}/subcategories`);
  }

  getBrands(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `brands`);
  }

  getUserOrders(userId: string): Observable<any> {
    return this._HttpClient.get(this.baseUrl  + `orders/user/${userId}`);
  }
}
