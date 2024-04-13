import { RouterLink } from '@angular/router';
import { Category } from './../../core/interfaces/product';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _ProductService:ProductService){}
  categoryData:Category[] = [];
ngOnInit(): void {
    this._ProductService.getCategories().subscribe({
      next:(response)=>{
        this.categoryData = response.data;
      }
    })
}


}
