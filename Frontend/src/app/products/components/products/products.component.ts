import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  products = [];  

  constructor(private ProductService : ProductService) { }

  getProducts() {
    this.ProductService.getProducts()
                        .subscribe(products => this.products = products, error => console.log(error))
  }

  deleteProduct(id: number) {
    this.ProductService.deleteProduct(id)
                        .subscribe(response => this.getProducts())
  }

  ngOnInit() {
    this.getProducts();
  }

}
