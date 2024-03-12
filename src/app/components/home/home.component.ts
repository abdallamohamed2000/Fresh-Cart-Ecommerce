import { WishlistService } from './../../core/services/wishlist.service';
import { SearchPipe } from './../../core/pipe/search.pipe';
import { CartService } from './../../core/services/cart.service';
import { RouterLink } from '@angular/router';
import { OwlOptions } from './../../../../node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d';
import { CuttextPipe } from './../../core/pipe/cuttext.pipe';
import { ProductService } from './../../core/services/product.service';
import { Product } from './../../core/interfaces/product';
import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe,CarouselModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent {

  constructor(private ProductService:ProductService,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2,
    private _WishlistService:WishlistService

    ){}

  products:Product[]=[];
  categories:any[]=[];
  searchTerm:string='';
  wishListData:string[]= [];
  
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
  
  
  mainSlider: OwlOptions = {
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
  
  categoriesSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  
  ngOnInit(): void {
  
    //get All products
      this.ProductService.getProducts().subscribe({
        next:(response)=>{
        this.products = response.data;
  
        },
      })
  
      this.ProductService.getCategories().subscribe({
        next:(response)=>{
          this.categories = response.data;
          
        }
      })

      this._WishlistService.getWishList().subscribe({
        next:(response)=>{
          // console.log('wishlist',response.data);
          const newData = response.data.map((item:any)=>item._id);
          // console.log('newData',newData);
          this.wishListData = newData;
          
          
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
