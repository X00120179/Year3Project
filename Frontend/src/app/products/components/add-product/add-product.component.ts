import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ProductService]
})
export class AddProductComponent implements OnInit {
  product : Product = {
    id: 0,
    name: '',
    description: '',
    quantity: 0
  };
  constructor(private ProductService : ProductService, private router  : Router) { }

  ngOnInit() {
  }

  addProduct() {
    // When the submit button is clicked, add to the server
    this.ProductService.addProduct(this.product)
      .subscribe(product => this.router.navigateByUrl("/products"));

    console.log("Product added");

  }

}
