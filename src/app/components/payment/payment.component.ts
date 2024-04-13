import { HttpErrorResponse } from '@angular/common/http';
import { CartService } from './../../core/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  msgError:string='';
  isLoading:boolean=false;
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.cartId=params.get('id');        
      }
    })
}


  checkout:FormGroup = this._FormBuilder.group({
    details:['',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]],
    phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    city:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]]
  })

  handleForm():void{
    if(this.checkout.valid)
    {
      this.isLoading = true;

      this._CartService.checkOut(this.cartId, this.checkout.value).subscribe(
        {
          next:(response)=>{
            if(response.status =="success"){
              this.isLoading = false;
              window.open(response.session.url,'_self');
            }
          } ,
      error:(err:HttpErrorResponse)=>{
        this.isLoading = false;
        this.msgError = err.error.message;
        console.log(err);
          
        
      }
        }
      )
    }
    else{
      this.checkout.markAllAsTouched();

    }
   
    
  }

}
