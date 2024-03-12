import { CartService } from './../../core/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  constructor(private _FormBuilder:FormBuilder, private _ActivatedRoute:ActivatedRoute,private _CartService:CartService){}


  cartId:any='';
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.cartId=params.get('id');        
      }
    })
}


  checkout:FormGroup = this._FormBuilder.group({
    details:[''],
    phone:[''],
    city:['']
  })

  handleForm():void{
    this._CartService.checkOut(this.cartId, this.checkout.value).subscribe(
      {
        next:(response)=>{
          if(response.status =="success"){
            window.open(response.session.url,'_self');
          }
        }
      }
    )
    
  }

}
