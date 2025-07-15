import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login-component',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public username: string;
  public password: string;

  login() {
    const user = {
      username: this.username,
      password: this.password
    }
    console.log(JSON.stringify(user));
  }
}
