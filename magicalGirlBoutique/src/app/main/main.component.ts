import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ShopComponent } from './shop/shop.component';
import { AuthService } from '../auth.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { Product } from '../product';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ShopComponent, FormsModule, CommonModule, AboutComponent, ContactComponent, IndexComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  @Output() logoutsuccessful: EventEmitter<void> = new EventEmitter()
  @Output() gotoshop: EventEmitter<void> = new EventEmitter()

  @Input() products: Product[] = []

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  async onSubmit() {
    Cookie.delete('userId');
    this.logoutsuccessful.emit()
  }

  show = 'index';

  changeView(component: string) {

    this.show = component;
  }
}
