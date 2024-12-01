import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Login Data:', this.loginData);
    // Here, you can send the login data to your backend for authentication
    alert(`Logged in as: ${this.loginData.email}`);
  }
}
