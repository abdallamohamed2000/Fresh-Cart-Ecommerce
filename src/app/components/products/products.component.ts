import { WishlistService } from './../../core/services/wishlist.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './../../core/pipe/search.pipe';
import { CuttextPipe } from './../../core/pipe/cuttext.pipe';
import { RouterLink } from '@angular/router';
import { Product } from './../../core/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../core/services/cart.service';
import { ProductService } from './../../core/services/product.service';
import { Component, Renderer2, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe,NgxPaginationModule,SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private ProductService:ProductService,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2,
    private _WishlistService:WishlistService
    ){}
    pageSize:number=0;
    currPage:number = 1;
    total:number = 0;
  products:Product[]=[];
  searchTerm:string= '';
  wishListData:string[]= [];


ngOnInit(): void {
  this.ProductService.getProducts().subscribe({
    next:(response)=>{
    this.products = response.data;
    this.pageSize = response.metadata.limit;
    this.currPage = response.metadata.currentPage;
    this.total = response.results;



    },
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

pageChanged(event:any):void{
  this.ProductService.getProducts(event).subscribe({
    next:(response)=>{
    this.products = response.data;
    this.pageSize = response.metadata.limit;
    this.currPage = response.metadata.currentPage;
    this.total = response.results;



    },
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
