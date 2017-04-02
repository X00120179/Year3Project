import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'app works!';
  private user = {};
  constructor(private UserService : UserService) { }

  getUser() {
    this.UserService.getUser()
                     .subscribe(user => this.user = user, error => console.log(error));
  }

  ngOnInit() {
    this.getUser();
  }

  logoutUser() {
    this.UserService.logoutUser();
    delete this.user;
  }

}
