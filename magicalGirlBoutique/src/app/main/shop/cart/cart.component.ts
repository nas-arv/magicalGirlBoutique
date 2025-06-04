import { Component, Input } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Product } from '../../../product';
import { FirebaseService } from '../../../firebase.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() products: Product[]=[]

  cartProducts: Product[]=[]

  constructor(private firebaseService: FirebaseService, private authService: AuthService) {}

  ngOnInit() {
    this.authService.fetchUserCart(this.firebaseService.lastuserID).then((pIDs) => {
      this.cartProducts = pIDs.map(pID => this.products.find(pr => pr.id === pID)) as Product[]

      console.log(this.cartProducts)
    })

    this.firebaseService.cartUpdated.subscribe((product: Product) => {
      this.cartProducts.push(product)
      this.authService.updateCart(this.firebaseService.lastuserID, this.cartProducts.map(product => product.id)).then(() => {})
    })
  }

  remove(index: number) {
    if (index !== -1) {
      this.cartProducts.splice(index, 1)
      this.authService.updateCart(this.firebaseService.lastuserID, this.cartProducts.map(product => product.id)).then(() => {})
    }
  }
}
