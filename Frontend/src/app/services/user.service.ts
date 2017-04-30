import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product } from '../products/model/product';
import {Observable} from 'rxjs/Rx';
import { User } from '../models/users';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  private loginUrl = "http://localhost:8000/api-token-auth/";
  private userUrl = "http://localhost:8000/user/";
  constructor(private http: Http)  { }

  getUser() : Observable<User> {
    let headers = new Headers();
    headers.append("Authorization", "Token " + localStorage.getItem("token"));
    let options = new RequestOptions({headers: headers});

    return this.http.get(this.userUrl, options)
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json())
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      
  }

  loginUser(username, password) {
    // Logs a user in by getting a token from the server and storing it in the browser storage.
    let request = {
      username: username,
      password: password
    }
    return this.http.post(this.loginUrl, request)
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  logoutUser() {
    // Remove the stored session key
    localStorage.removeItem("token");
  }

}
