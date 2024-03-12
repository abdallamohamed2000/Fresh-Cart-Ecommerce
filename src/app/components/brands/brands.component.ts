import { ProductService } from './../../core/services/product.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {

  constructor(private _ProductService:ProductService){}
  brandData:any ='';
ngOnInit(): void {
    this._ProductService.getBrands().subscribe({
      next:(response)=>{
        this.brandData = response.data;
        console.log(response.data);
        
        
      }
    })
}

}
