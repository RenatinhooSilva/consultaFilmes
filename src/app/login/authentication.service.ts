import { Router } from '@angular/router';
import { RequestLogin } from './../Models/RequestLogin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authenticationOK: boolean = false;

  constructor(private router: Router) {}

  toLogin(usuario: RequestLogin) {
    if (usuario.usuario === 'usuario@email.com' && usuario.senha === '123456') {
      this.authenticationOK = true;
      this.router.navigate(['home']);
    } else {
      this.authenticationOK = false;
    }
  }

  userAuthenticationOK() {
    return this.authenticationOK;
  }
}
