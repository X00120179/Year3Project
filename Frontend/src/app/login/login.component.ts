import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  
  private user = {
    username: "",
    password: ""
  };
  
  constructor(private UserService : UserService, private router : Router) { }

  ngOnInit() {
    this.UserService.logoutUser();
  }

  saveToken(token) {
    localStorage.setItem("token", token.token);
  }

  loginUser() {
    this.UserService.loginUser(this.user.username, this.user.password)
                              .subscribe(token => this.saveToken(token), error => console.log(error));
    this.router.navigateByUrl("/index");
      
    

  }

}
