import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product } from '../products/model/product';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ProductService {
  private productsUrl = "http://localhost:8000/products/";
  constructor(private http: Http)  { }

  // Get Products Service
  getProducts() : Observable<Product[]>{
    // ...using get request
    return this.http.get(this.productsUrl)
                // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  addProduct(product : Product) : Observable<Product> {
    let headers = new Headers();
    headers.append("Authorization", "Token " + localStorage.getItem("token"));
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.productsUrl, product, options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteProduct(id : number) {
    let headers = new Headers();
    headers.append("Authorization", "Token " + localStorage.getItem("token"));
    let options = new RequestOptions({headers: headers});
    return this.http.delete(this.productsUrl + id + '/', options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}

