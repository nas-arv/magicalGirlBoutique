import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-login',
  standalone: true, // this can change
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  @Output() showRegister = new EventEmitter<void>()
  @Output() loginsuccessful: EventEmitter<void> = new EventEmitter()
  username: string = ''
  password: string = ''

  constructor(private authService: AuthService, private firebaseService: FirebaseService) { }

  async ngOnInit() {
    console.log('On Init!!')
    let currentUserIdCookie = Cookie.get('userId');
    if (currentUserIdCookie) {
      console.log(`Already logged in: ${currentUserIdCookie}`)

      this.loginsuccessful.emit()

      this.firebaseService.lastuserID = currentUserIdCookie;
    }
  }

  async onSubmit() {
    let userID!: string
    let users = await this.authService.fetchUsers()

    let foundUser = users.find((user) => user.username === this.username && user.password === this.password)

    if (foundUser) {
      userID = foundUser.id
      console.log(`Login successful for user ID: ${userID}`)
      Cookie.set('userId', userID)
      this.loginsuccessful.emit()
      this.firebaseService.lastuserID = userID
    }
    else {
      alert('Wrong username or password. Try again.')
    }

    if (!userID) {
      console.error('Invalid username or password.')
    }
  }

  onRegisterClick() {
    this.showRegister.emit()
  }

}


