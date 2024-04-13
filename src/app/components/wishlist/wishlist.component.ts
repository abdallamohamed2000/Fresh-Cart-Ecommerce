import { CartService } from './../../core/services/cart.service';
import { CuttextPipe } from './../../core/pipe/cuttext.pipe';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from './../../core/interfaces/product';
import { WishlistService } from './../../core/services/wishlist.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor(private _WishlistService:WishlistService, private _ToastrService:ToastrService, private _Renderer2:Renderer2,
    private _CartService:CartService
    
    ){}

  products:Product[]=[];
  wishListData:string[]= [];



  ngOnInit(): void {
      this._WishlistService.getWishList().subscribe({
        next:(response)=>{
          this.products = response.data;
           // console.log('wishlist',response.data);
           const newData = response.data.map((item:any)=>item._id);
           // console.log('newData',newData);
           this.wishListData = newData;
          
        }
      })
  }

 

  addCart(id:any,element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element,'disabled', 'true');
  
      this._CartService.addToCart(id).subscribe({
        next:(response)=>{
          this._ToastrService.success(response.message);
          this._Renderer2.removeAttribute(element,'disabled');
          this._CartService.cartNumber.next(response.numOfCartItems);
          
        },
        error:(err)=>{
          console.log(err);
          this._Renderer2.removeAttribute(element,'disabled');
  
        }
      })
    }

    addFavourite(prodId:string|undefined):void{
      this._WishlistService.addToWishList(prodId).subscribe({
        next:(response)=>{
          console.log(response);
          this._ToastrService.success(response.message);
          this.wishListData = response.data;
          this._WishlistService.wishListNumber.next(this.wishListData.length);
  
  
          
        }
      })
    }
  
    removeFavourite(prodId:string|undefined):void{
      this._WishlistService.removeWishList(prodId).subscribe({
        next:(response)=>{
          //console.log(response);
          this._ToastrService.success(response.message);
          this.wishListData = response.data;
          this._WishlistService.wishListNumber.next(this.wishListData.length);

          const newProductsData = this.products.filter((item:any)=>this.wishListData.includes(item._id));
          this.products = newProductsData;
  
  
  
          
        }
      })
    }


}
