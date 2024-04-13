import { RouterLink } from '@angular/router';
import { CuttextPipe } from './../../core/pipe/cuttext.pipe';
import { ProductService } from './../../core/services/product.service';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule,CuttextPipe,RouterLink],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _ProductService:ProductService){}

  ordersData: any[] = [];
  userId: string = '';
ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:(data)=>{       
        if(data !=null){
          this.userId  =data.id;
          this._ProductService.getUserOrders(this.userId).subscribe({
            next:(response)=>{
              this.ordersData = response;
              console.log(this.ordersData);
              
              
            }
          })
        }
      }
    })
}
}
