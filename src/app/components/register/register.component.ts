import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService , private _Router:Router, private _FormBuilder:FormBuilder){}




  msgError:string='';
isLoading:boolean=false;


registerForm:FormGroup = this._FormBuilder.group({
  name:['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  email:['', [Validators.required,Validators.email]],
  phone:['', [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
  password:['', [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],
  rePassword:[''],

}, {validators:[this.confirmPassword]} as FormControlOptions  );

confirmPassword(group:FormGroup){
  let password = group.get('password');
  let rePassword = group.get('rePassword');
  
  if(rePassword?.value == ''){
    rePassword?.setErrors({required:true});
  }
  
  else if(password?.value != rePassword?.value)
  {
    rePassword?.setErrors({mismatch:true});
  }


}


handleForm():void{

if(this.registerForm.valid){

  this.isLoading = true;
  this._AuthService.setRegister(this.registerForm.value).subscribe({
    next:(response)=>{
     if(response.message='success'){
      this.isLoading = false;
      this._Router.navigate(['/login']);
     } 
    },
    error:(err:HttpErrorResponse)=>{
      this.isLoading = false;
      this.msgError = err.error.message;
      console.log(err.error);
        
      
    }
  })
}
else{
  this.registerForm.markAllAsTouched();
}
}

}
