import { CuttextPipe } from './../../core/pipe/cuttext.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from './../../core/services/cart.service';
import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink,CuttextPipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private _CartService:CartService, private _Renderer2:Renderer2){}
  cartDetails:any=null;

  removeCartItem(id:string,element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element,'disabled', 'true');
    this._CartService.removeItem(id).subscribe({
      next:(response)=>{
    this.cartDetails = response.data; 
    this._Renderer2.removeAttribute(element,'disabled');
    this._CartService.cartNumber.next(response.numOfCartItems);


      },
      error:(err)=>{
        console.log(err);
        this._Renderer2.removeAttribute(element,'disabled');

        

      }
    })
  }


  ngOnInit(): void {
      this._CartService.getUserCart().subscribe({
        next:(response)=>{
          this.cartDetails = response.data;
          
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
  }

  changeCount(id:string, countProduct:number,elem1:HTMLButtonElement,elem2:HTMLButtonElement):void{

    if(countProduct>=1)
    this._Renderer2.setAttribute(elem1,'disabled', 'true');
    this._Renderer2.setAttribute(elem2,'disabled', 'true');

    {
      this._CartService.updateCart(id,countProduct).subscribe({
        next:(response)=>{
          console.log(response.data);
          this.cartDetails = response.data; 
          this._Renderer2.removeAttribute(elem1,'disabled');
          this._Renderer2.removeAttribute(elem2,'disabled');
        },
        error:(err)=>{
          console.log(err);
          this._Renderer2.removeAttribute(elem1,'disabled');
          this._Renderer2.removeAttribute(elem2,'disabled');
          
        }
      })
    }
   
  }

  clear():void{
    this._CartService.clearCart().subscribe({
      next:(response)=>{
        if(response.message==='success')
        {
          this.cartDetails =null;
          this._CartService.cartNumber.next(0);

        }
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
