import { Category } from './../../core/interfaces/product';
import { ProductService } from './../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorydetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.scss']
})
export class CategorydetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductService:ProductService){}
  categoryId:any = '';
  categoryDetails:Category = {} as Category;
  subCategoryData:any=''


  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.categoryId = params.get('id');
        }
      })

      this._ProductService.getCategoryDetails(this.categoryId).subscribe({
        next:(response)=>{
          this.categoryDetails = response.data;
        }
      })
      this._ProductService.getSubCategoriesToCat(this.categoryId).subscribe({
        next: (response) => {
          this.subCategoryData = response.data;
          console.log(response.data);
          
        },
      });

      
  }


}
