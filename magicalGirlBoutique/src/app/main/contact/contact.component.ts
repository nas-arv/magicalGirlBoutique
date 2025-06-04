import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor() {}

  email: string = ''
  message: string = ''

  async submitForm() {
    console.log("Form submitted!")
    console.log("Email:", this.email)
    console.log("Message:", this.message)

    this.email = ''
    this.message = ''

    alert('Message submitted!')
  }
}