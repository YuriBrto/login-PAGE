import { Component } from '@angular/core';
import { DefaultLoginPageComponent } from '../../components/default-login-page/default-login-page.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginPageComponent,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
constructor(){
this.loginForm= new FormGroup({
  email: new FormControl('', [Validators.required,Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)])
})
}
}
