import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://localhost:3000/api/registration';
  private _loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient,
              private _router: Router) {
  }

  registerUser = (user: any) => this.http.post<any>(this._registerUrl, user);

  loginUser = (user: any) => this.http.post<any>(this._loginUrl, user);

  loggedIn = () => !!localStorage.getItem(`token`);

  logoutUser = () => {
    localStorage.removeItem('token');
    this._router.navigate(['/events']);
  }

  getToken = () => localStorage.getItem('token');
}

