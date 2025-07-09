import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductType } from '../models/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {

  private baseUrl = "http://localhost:3000/"

  constructor(private http : HttpClient ) {}

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.baseUrl + "products");
  }
}
