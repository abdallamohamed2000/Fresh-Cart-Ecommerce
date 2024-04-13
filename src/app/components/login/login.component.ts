import { Router, RouterLink } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService ,
   private _Router:Router, private _FormBuilder:FormBuilder){}

msgError:string='';
isLoading:boolean=false;


loginForm:FormGroup = this._FormBuilder.group({
  email:['', [Validators.required,Validators.email]],
  password:['', [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],

});

handleForm():void{

if(this.loginForm.valid){

  this.isLoading = true;
  this._AuthService.setLogin(this.loginForm.value).subscribe({
    next:(response)=>{
     if(response.message='success'){
      this.isLoading = false;
      localStorage.setItem('eToken', response.token);
      localStorage.setItem('email', this.loginForm.get('email')?.value);
      this._AuthService.saveUserData();
      this._Router.navigate(['/home']);
     } 
    },
    error:(err:HttpErrorResponse)=>{
      this.isLoading = false;
      this.msgError = err.error.message;  
      
    }
  })
}
else{
  this.loginForm.markAllAsTouched();
}
}

}
