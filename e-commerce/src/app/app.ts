import { Component } from '@angular/core';
import { ProductComponent } from './components/product.component/product.component';
import { NavbarComponent } from './components/navbar.component/navbar.component';
import { ProductType } from './models/types';
import { ProductHover } from './directives/product-hover';
import { ProductClickDirective } from './directives/product-click.directive';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,ProductComponent,ProductHover,ProductClickDirective,MatSidenavModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  public showFiller = false;
  public selectedPrice: number;

  public products: ProductType[] = [];
  public products$: Observable<ProductType[]>;

  constructor(private productService : ProductService){
    this.products$ = this.productService.getProducts();
    console.log(this.products$)
    this.products$.subscribe(
      (data) => {
        this.products = data;
      }
    )
  }

  onPriceEmitted($event){
    this.selectedPrice = $event
  }

}
