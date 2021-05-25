import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {ConfirmedValidator} from './confirmed.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  title = 'Registration form';
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private _auth: AuthService, private _router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.registrationForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
        secondName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        email: ['', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
        phone: ['+380', [Validators.required, Validators.minLength(13), Validators.pattern('^[0-9\-\+]{9,15}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      },
      {validator: ConfirmedValidator('password', 'confirmPassword')}
    );
  }

  get f(): { [p: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  submit(): void {
    this._auth.registerUser(this.registrationForm.value)
      .subscribe(
          res => {
            console.log(res);
            document.cookie = 'jwt=' + (res.token || '');
            this._router.navigate(['/special']);
          },
          err => console.log(err)
      );
    this.registrationForm.reset();
    this.title = 'Thank you for filling out your information! We have received the form!';
  }
}
