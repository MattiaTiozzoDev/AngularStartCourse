import { Injectable } from '@angular/core';
import { ProductComponent } from '../components/product.component/product.component';

@Injectable({
  providedIn: "root"
})
export class CartService {

  public total : number = 0

  constructor() { }

  addToTotal(price: number){
    this.total += price;
  }
}
