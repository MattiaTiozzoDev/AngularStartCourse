import { Component } from '@angular/core';
import { ProductComponent } from './components/product.component/product.component';
import { NavbarComponent } from './components/navbar.component/navbar.component';
import { ProductType } from './models/types';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  public selectedPrice: number;

  public product1 : ProductType = {
    imgUrl : "assets/img/tazza_codefather.jpg",
    title : "The codefather",
    price : 23.50
  }

  public product2 : ProductType = {
    imgUrl : "assets/img/tazza_gatto.jpg",
    title : "The Gatto",
    price : 21.50
  }

  onPriceEmitted($event){
    this.selectedPrice = $event
  }
}
