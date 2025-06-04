import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FirebaseService } from '../../firebase.service';
import { Product } from '../../product';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CartComponent, CommonModule, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  @Input() products: Product[] = []
  searchedProducts: Product[] = []
  query: string = ''

  constructor(private firebaseService: FirebaseService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.fetchProducts().then((pr) => {
      this.products = pr
      console.log('this.products', this.products)
      this.searchedProducts = this.products
    })
  }

  addToCart(pID: string) {
    let product = this.products.find((product) => product.id === pID)
    console.log("product", product)

    if (product) {
      this.firebaseService.cartUpdated.emit(product)
    }
  }

  onSearch() {
    console.log(this.query)
    const lowercaseQuery = this.query.toLowerCase()

    this.searchedProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery)
    )

    console.log('Search results:', this.searchedProducts)
  }
}
