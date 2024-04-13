import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updatedata',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.scss']
})
export class UpdatedataComponent {
  constructor(private _FormBuilder:FormBuilder, private _Router:Router,private _AuthService:AuthService, private _ToastrService:ToastrService){}

  isLoading:boolean=false;
  outputMssg:any='';
  msgError:any='';



  updateDataForm:FormGroup = this._FormBuilder.group({
    name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    email:['', [Validators.required,Validators.email]]
  })

  updateUserData() {
    if(this.updateDataForm.valid)
    {
      this.isLoading = true;
    this._AuthService.updateLoggedUserData(this.updateDataForm.value).subscribe({
      next: (response:any) => {
        this.isLoading = false;
        this._AuthService.userData.next(response.user);
        this._ToastrService.success(response.message);
        this._Router.navigate(['/login']);
        // console.log(response.user);
        
      },
      error: (err) => {
        this.isLoading = false;
        this.msgError = err.error.errors.msg;
        console.log(err);
      }
    })
    }
    else{
      this.updateDataForm.markAllAsTouched();
    }
  }

}
