import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from '../../models/types';
import { CurrencyPipe, NgClass, TitleCasePipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'product-component',
  imports: [NgClass, CurrencyPipe, TitleCasePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product: ProductType;

  @Output() priceEmitter = new EventEmitter<number>();

  constructor(private cartService: CartService) { }

  addToCart() {
    //this.priceEmitter.emit(this.product.price);
    this.cartService.addToTotal(this.product.price);
  }

}
