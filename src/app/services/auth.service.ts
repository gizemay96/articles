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
    if (this.hasLoginError(user)) {
      return {
        isError: true,
        errorMessage: 'Wrong username or password !',
        payload: null
      }
    } else {
      return {
        isError: false,
        errorMessage: 'Wrong username or password !',
        payload: user
      }
    }
  }

  isAuthenticated(): boolean {
    return !!window.sessionStorage.getItem('user');
  }

  hasLoginError(user: User) {
    let authResponse = !users.some(dbUser => dbUser.userName === user.userName && dbUser.password === user.password);
    return authResponse;
  }

}
