import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserType } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:3000/";

  public isLoggedIn = false;

  constructor(private http: HttpClient) { }

  public authenticate(user: UserType): Observable<any> {
    return this.http.post(this.baseUrl + "login", user);
  }

  public login(user) {
    this.authenticate(user).subscribe((res) => {
      console.log(JSON.stringify(res));
      this.isLoggedIn = true;
    })
    return this.isLoggedIn;
  }
}
