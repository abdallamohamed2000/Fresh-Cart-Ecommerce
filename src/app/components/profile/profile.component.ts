import { AuthService } from './../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private _AuthService:AuthService){}
  Name: string = '';
  Email: string = '';
  Role: string = '';
  ngOnInit(): void {
    this._AuthService.saveUserData();
    this.Email = localStorage.getItem('email') ||'';
    this.Name=this._AuthService.userData.getValue().name;
    this.Role=this._AuthService.userData.getValue().role;



   
}

}
