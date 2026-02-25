import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Response } from '../interfaces/response.interface';
import { Observable } from 'rxjs';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root',
})
export class Projects {
  private http = inject(HttpClient);
  private auth = inject(AuthService);
  private apiUrl = 'https://proyectointermodular-production-0233.up.railway.app/api';
  public getData(): Observable<Response[]> {
    return this.http.get<Response[]>(`${this.apiUrl}/projects`, {
      headers: this.auth.getAuthHeaders(), // ✅ enviamos token
    });
  }
}
