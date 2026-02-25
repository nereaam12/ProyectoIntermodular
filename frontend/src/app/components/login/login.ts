import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
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
      next: (response) => {
        // Redirigir al backend Twig
        this.authService.saveToken(response.token);
        window.location.href = 'https://proyectointermodular-production-0233.up.railway.app/user';
      },
      error: () => {
        this.errorMessage = 'Email o contraseña incorrectos';
      }
    });
  }
}
