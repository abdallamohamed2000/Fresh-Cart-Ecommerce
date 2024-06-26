import { Router, RouterLink } from '@angular/router';
import { ForgotpassService } from './../../core/services/forgotpass.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {

  constructor(private _ForgotpassService:ForgotpassService,private _Router:Router){}
  step1:boolean = true;
  step2:boolean = false;
  step3:boolean = false;
  email:string='';
  userMsg:string='';

  forgotForm:FormGroup = new FormGroup({
    email:new FormControl ('')
  })
  resetCodeForm:FormGroup = new FormGroup({
    resetCode:new FormControl ('')
  })
  resetPasswordform:FormGroup = new FormGroup({
    newPassword:new FormControl ('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)])
  })

  forgotPassword():void{
    let userEmail = this.forgotForm.value;
    this.email = userEmail.email;
    this._ForgotpassService.forgotPassword(userEmail).subscribe({
      next:(response)=>{
        this.userMsg = response.message;
        this.step1 = false;
        this.step2 = true;
      },
      error:(err)=>{
        this.userMsg = err.error.message;
        
      }
    })


  }
  resetCode():void{
    let resetCode = this.resetCodeForm.value;
    this._ForgotpassService.resetCode(resetCode).subscribe({
      next:(response)=>{
        this.userMsg = response.status;
        this.step2 = false;
        this.step3 = true;

          
      },
      error:(err)=>{
        this.userMsg = err.error.message;
        
      }
    })

  }
  newPassword():void{
    let resetForm = this.resetPasswordform.value;
    resetForm.email = this.email;
    this._ForgotpassService.resetPassword(resetForm).subscribe({
      next:(response)=>{        
        if(response.token){
          localStorage.setItem('eToken',response.token);
          this._Router.navigate(['/home']);
        }
        
      },
      error:(err)=>{
        this.userMsg = err.error.message;
      
        
      }
    })

  }
  

}
