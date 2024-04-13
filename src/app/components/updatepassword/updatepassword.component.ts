import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControlOptions, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updatepassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.scss']
})
export class UpdatepasswordComponent {

  constructor(private _FormBuilder:FormBuilder, private _Router:Router,private _AuthService:AuthService, private _ToastrService:ToastrService){}

  isLoading:boolean=false;
  msgError:any='';


  updatePasswordForm:FormGroup = this._FormBuilder.group({
    currentPassword:['',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],
    password:['', [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],
    rePassword:['',[Validators.required]],
  },{validators:[this.confirmPassword]} as FormControlOptions);

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

  updatePassword(){

    if(this.updatePasswordForm.valid)
    {
      this.isLoading = true;
      this._AuthService.updatePasswords(this.updatePasswordForm.value).subscribe({
        next: (response:any) => {
          this.isLoading = false;
          // console.log(response);
          this._ToastrService.success(response.message);
          this._Router.navigate(['/login']);
          
        },
        error: (err) => {
          this.isLoading = false;
          this.msgError = err.error.errors.msg;
          console.log(err);
        }
      })
   
    }
    else{
      this.updatePasswordForm.markAllAsTouched();
    }

  }

}
