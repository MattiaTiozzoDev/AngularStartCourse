import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'navbar-component',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public cartIsOpen = false;

  @Input() selectedPrice : number;

  @Output() showCartEmitter = new EventEmitter<boolean>();

  constructor(public cartService: CartService){}

  showCart(){
    this.cartIsOpen = !this.cartIsOpen;
    this.showCartEmitter.emit(this.cartIsOpen);
  }

}
