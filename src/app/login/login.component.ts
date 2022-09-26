import { AuthenticationService } from './authentication.service';
import { RequestLogin } from '../Models/RequestLogin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public usuario: RequestLogin = new RequestLogin() ;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  login() {
    console.log(this.usuario);
    this.authenticationService.toLogin(this.usuario)
  }
}
