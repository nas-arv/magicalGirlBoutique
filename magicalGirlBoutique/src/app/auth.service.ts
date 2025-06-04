import { Injectable } from '@angular/core';
import { Product } from './product';
import { User } from './user';
import { Creators } from './creators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private firebaseEndpoint = 'https://project-59796-default-rtdb.europe-west1.firebasedatabase.app/'
  users: User[] = []
  products: Product[] = []
  userCart: string[] = []
  creators: Creators[] = []

  constructor() { }

  async fetchUsers() {
    try {
      const response = await fetch(`${this.firebaseEndpoint}users.json`)

      if (!response.ok) throw new Error('Failed to fetch users.')

      const data = await response.json()

      this.users = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }))
    }
    catch (error) {
      console.error('Error fetching users:', error)
    }
    return this.users
  }

  async fetchProducts() {
    try {
      const response = await fetch(`${this.firebaseEndpoint}products.json`)

      if (!response.ok) throw new Error('Failed to fetch products.')

      const data = await response.json()

      this.products = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }))
    }
    catch (error) {
      console.error('Error fetching products:', error)
    }
    return this.products
  }

  async fetchUserCart(userID: string) {
    try {
      const response = await fetch(`${this.firebaseEndpoint}users/${userID}/cart.json`)

      if (!response.ok) throw new Error('Failed to fetch user cart')

      const data = await response.json()

      if (data) this.userCart = data
    }
    catch (error) {
      console.error('Error fetching cart:', error)
    }
    return this.userCart
  }

  async updateCart(userID: string, cart: string[]) {
    try {
      await fetch(`${this.firebaseEndpoint}users/${userID}/cart.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
      })
    }
    catch (error) {
      console.error('Error updating cart:', error)
    }
  }

  // async updateUsers(user: User) {
  //   try {
  //     await fetch(`${this.firebaseEndpoint}users.json`, {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify(user)
  //     })   
  //   }
  //   catch (error) {
  //     console.error('Error updating users:', error)
  //   }
  // } old function


  // to try to fix key/id issue
  async updateUsers(user: Partial<User>): Promise<string> {
    try {
      const response = await fetch(`${this.firebaseEndpoint}users.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error('Failed to update users.');
      }

      const data = await response.json();
      return data.name; 
    } catch (error) {
      console.error('Error updating users:', error);
      throw error; 
    }
  }

  async fetchCreators() {
    try {
      const response = await fetch(`${this.firebaseEndpoint}creators.json`)

      if (!response.ok) throw new Error('Failed to fetch creators.')

      const data = await response.json()

      this.creators = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }))
    }
    catch (error) {
      console.error('Error fetching creators:', error)
    }
    return this.creators
  }

}

