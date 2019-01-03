import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  return = '';

  constructor(
      private userService: UserService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.return = params['return'] || '/articles';
      if (!this.userService.isGuest()) {
        this.go();
      }
    });
  }

  login() {
    if (this.username && this.password) {
        this.userService.login(this.username);
        this.go();
    }
  }

  go() {
    this.router.navigateByUrl(this.return);
  }
}
