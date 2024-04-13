import { Product } from './../interfaces/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products:Product[], term:string): Product[] {
    return products.filter((productItem)=> productItem.title.toLowerCase().includes(term.toLowerCase()));
  }

}
