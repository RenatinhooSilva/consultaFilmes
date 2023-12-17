import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './login/authentication.service';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/service-movies.service';
import { AuthGuard } from './Guards-Router/auth-guard';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    RouterTestingModule

  ],
  providers: [AuthenticationService, MoviesService, HttpClient, AuthGuard, Router],
  bootstrap: [AppComponent],
})
export class AppModule {}
