import { WishlistService } from './../../core/services/wishlist.service';
import { CartService } from './../../core/services/cart.service';
import { Component, ElementRef, HostListener, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {

  constructor(private _Router:Router,
    private _CartService: CartService,
    private _Renderer2:Renderer2,
    private _WishlistService:WishlistService
    
    ){}

  @ViewChild('navBar') navElement!:ElementRef;
@HostListener('window:scroll')
onScroll():void{
  if(scrollY>300)
  {
    this._Renderer2.addClass(this.navElement.nativeElement,'px-5');
    this._Renderer2.addClass(this.navElement.nativeElement,'py-3');
  }
  else{
    this._Renderer2.removeClass(this.navElement.nativeElement,'px-5');
    this._Renderer2.removeClass(this.navElement.nativeElement,'py-3');


  }

}


cartNum:number = 0;
wishListNum:number = 0;

ngOnInit(): void {
  
  this._CartService.cartNumber.subscribe({
    next:(response)=>{
      this.cartNum = response;
      
    }
  })

  this._CartService.getUserCart().subscribe({
    next:(response)=>{
      this.cartNum = response.numOfCartItems;
    }
  })

  this._WishlistService.wishListNumber.subscribe({
    next:(response)=>{
      this.wishListNum = response;
      console.log(response);
      
      
    }
  })
  this._WishlistService.getWishList().subscribe({
    next:(response)=>{
      this.wishListNum = response.count;
      
    }
  })
  
}



  logOutUser():void
  {
    localStorage.removeItem('eToken');
    this._Router.navigate(['/login']);
  }

}
