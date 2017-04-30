import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [UserService]
})

export class IndexComponent implements OnInit {

  constructor(private UserService: UserService) { }
  private user = {};

  getUser() {
    this.UserService.getUser()
                     .subscribe(user => this.user = user, error => console.log(error));
  }

  ngOnInit() {
    this.getUser();
  }

}
