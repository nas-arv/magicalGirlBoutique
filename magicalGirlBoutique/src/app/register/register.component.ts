import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() registersuccessful: EventEmitter<void> = new EventEmitter()
  @Output() showLogin = new EventEmitter<void>()
  username: string = ''
  password: string = ''

  constructor(private authService: AuthService, private firebaseService: FirebaseService) { }

  async onSubmit() {
    if (this.password.length < 6) {
      alert('Password needs to have more than 6 characters.')
      return
    }

    const users = await this.authService.fetchUsers();
    const userExists = users.some(user => user.username === this.username)
    if (userExists) {
      alert('This username is taken. Please enter a different username.')
      return
    }

    const tempUser = {
      username: this.username,
      password: this.password,
      cart: [] // initialize empty cart
    }

    try {
      const firebaseKey = await this.authService.updateUsers(tempUser)
      const newUser = new User(firebaseKey, this.username, this.password)

      users.push(newUser)

      this.registersuccessful.emit()

      this.username = ''
      this.password = ''

      console.log('Registration successful:', newUser)
    }
    catch (error) {
      console.error('Registration error:', error)
      alert('Registration failed. Please try again.')
    }
  }

  onLoginClick() {
    this.showLogin.emit()
  }
}