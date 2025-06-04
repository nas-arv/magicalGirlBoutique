import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { ShopComponent } from './main/shop/shop.component';
import { CartComponent } from './main/shop/cart/cart.component';
import { IndexComponent } from './main/index/index.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, IndexComponent, CartComponent, CommonModule, MainComponent, RegisterComponent, AboutComponent, ContactComponent, ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() { }

  currentView: 'login' | 'register' | 'index' | 'shop' | 'about' | 'contact' | 'main' = 'login';

  redirectToMain() {
    console.log('redirectToMain')
    this.currentView = 'main';
  }

  switchToRegister() {
    this.currentView = 'register';
  }

  switchToLogin() {
    this.currentView = 'login';
  }

  switchToShop() {
    this.currentView = 'shop';
  }

  switchToAbout() {
    this.currentView = 'about';
  }

  switchToContact() {
    this.currentView = 'contact';
  }

  switchToIndex() {
    this.currentView = 'index';
  }
}