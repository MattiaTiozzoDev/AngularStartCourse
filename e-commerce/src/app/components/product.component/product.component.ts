import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from '../../models/types';

@Component({
  selector: 'product-component',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product : ProductType ;

  @Output() priceEmitter = new EventEmitter<number>();

  addToCart(){
    this.priceEmitter.emit(this.product.price);
  }

}
