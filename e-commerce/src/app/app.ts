import { Component } from '@angular/core';
import { ProductComponent } from './components/product.component/product.component';
import { NavbarComponent } from './components/navbar.component/navbar.component';
import { ProductType } from './models/types';
import { ProductHover } from './directives/product-hover';
import { ProductClickDirective } from './directives/product-click.directive';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,ProductComponent,ProductHover,ProductClickDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  public selectedPrice: number;

  public products: ProductType[] = [
    {
        id: 1,
        title: "The Codefather",
        imgUrl: "assets/img/tazza_codefather.jpg",
        price: 9,
        promotion: true
    },
     {
        id: 2,
        title: "Coding with coffe",
        imgUrl: "assets/img/tazza_coding.jps",
        price: 16
    },
     {
        id: 3,
        title: "I Love CSS",
        imgUrl: "assets/img/tazza_css.jpg",
        price: 13
    },
     {
        id: 4,
        title: "Debugging definition",
        imgUrl: "assets/img/tazza_debugging.jpg",
        price: 23
    },
     {
        id: 5,
        title: "Debugging is cool",
        imgUrl: "assets/img/tazza_debugging2.jpg",
        price: 17,
        promotion: true
    },
     {
        id: 6,
        title: "Documentation not worth",
        imgUrl: "assets/img/tazza_documentation.jpg",
        price: 18
    },
     {
        id: 7,
        title: "Cat developer",
        imgUrl: "assets/img/tazza_gatto.jpg",
        price: 11
    }
]

  onPriceEmitted($event){
    this.selectedPrice = $event
  }
}
