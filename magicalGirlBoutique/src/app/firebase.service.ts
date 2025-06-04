import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './product';
import { Creators } from './creators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  lastuserID!: string 
  products: Product[]=[]
  creators: Creators[]=[]
  cartUpdated: EventEmitter<Product> = new EventEmitter()
}
