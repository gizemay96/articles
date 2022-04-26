import { Injectable } from '@angular/core';
import users from '../json/users.json'
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  users: User[] = users;

  constructor() { }

  login(user: User) {
    return this.getAuthResponse(user);
  }

  isAuthenticated(): boolean {
    return !!window.localStorage.getItem('user');
  }

  getAuthResponse(user: User) {
    let dbUser = users.find(dbUser => dbUser.userName === user.userName && dbUser.password === user.password);
    if (!dbUser) {
      return {
        isError: true,
        errorMessage: 'Wrong username or password !',
        payload: null
      }
    } else {
      return {
        isError: false,
        errorMessage: '',
        payload: dbUser
      }
    }
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

}
