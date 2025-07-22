import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserType } from '../../models/types';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login-component',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public username: string;
  public password: string;

  constructor(public authService: AuthService) { }

  login() {
    const user: UserType = {
      username: this.username,
      password: this.password
    }
    let isLoggedIn = this.authService.login(user);
    if (isLoggedIn) {

    }
  }
}
