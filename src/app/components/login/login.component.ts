import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginTitle = 'Your account';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _auth: AuthService, private _router: Router) {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
        password: ['', Validators.required]
      });
  }


  signIn(): void {
    this._auth.loginUser(this.loginForm.value)
      .subscribe(
        res => {
          document.cookie = 'jwt=' + (res.token || '');
          localStorage.setItem('token', res.token);
          this._router.navigate(['/special']);
        },
        err => console.log(err)
      );
  }
}
