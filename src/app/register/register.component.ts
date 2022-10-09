import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.register(email, password).subscribe({
      next: data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        setTimeout(() => {
          this.navigateToLogin();
        }, 2000);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }
}