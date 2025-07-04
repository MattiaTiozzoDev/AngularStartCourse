import { Component } from '@angular/core';
import { ProductComponent } from './components/product.component/product.component';
import { NavbarComponent } from './components/navbar.component/navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'e-commerce';
}
