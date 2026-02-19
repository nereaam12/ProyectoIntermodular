import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api';

  // Registro de usuario
  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, password });
  }

  // Login - devuelve el token
  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login_check`, { email, password })
      .pipe(
        tap(response => {
          // Guardar token en cookie para que Symfony lo reciba automáticamente
          document.cookie = `BEARER=${response.token}; path=/; SameSite=Lax`;
        })
      );
  }

  // Logout: elimina la cookie
  logout(): void {
    // Poner la cookie con fecha pasada para borrarla
    document.cookie = 'BEARER=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }

  // Comprobar si está logueado
  isLoggedIn(): boolean {
    return document.cookie.includes('BEARER=');
  }
}
