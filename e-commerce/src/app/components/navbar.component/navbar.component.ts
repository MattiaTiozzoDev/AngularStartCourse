import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'navbar-component',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() selectedPrice : number;

  constructor(public cartService: CartService){}

}
