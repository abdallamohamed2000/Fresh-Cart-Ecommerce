import { WishlistService } from './../../core/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../core/services/cart.service';
import { Product } from './../../core/interfaces/product';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductService:ProductService,
    private _CartService:CartService, private _ToastrService:ToastrService,private _Renderer2:Renderer2,private _WishlistService:WishlistService
    ){}

  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    items:1,
    nav: false
  }
  productDetails:any = null;
  wishListData:string[]= [];


ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        let idProduct:any = params.get('id');
        this._ProductService.getProductsDetails(idProduct).subscribe({
          next:(response)=>{            
          this.productDetails = response.data;
          }
        })
                
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
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishListData = response.data;
        this._WishlistService.wishListNumber.next(this.wishListData.length);



        
      }
    })
  }
}
