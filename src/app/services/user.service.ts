import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

let username = localStorage.getItem('username') || '';

@Injectable()
export class UserService {

  constructor(private router: Router) { }

  isGuest() {
    return (!username);
  }

  getUser() {
    return username;
  }

  login(newUsername) {
    username = newUsername;
    localStorage.setItem('username', newUsername);
  }

  logout() {
    username = '';
    localStorage.setItem('username', '');
  }
}
