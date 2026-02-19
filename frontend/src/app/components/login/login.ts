import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMessage = '';

  reactiveForm = new FormGroup({
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true})
  });

  onSubmit(): void {
    const data = this.reactiveForm.getRawValue();

    this.authService.login(data.email, data.password).subscribe({
      next: () => {
        // Redirigir al backend Twig
        window.location.href = 'http://localhost:8000/user';
      },
      error: () => {
        this.errorMessage = 'Email o contraseña incorrectos';
      }
    });
  }
}
