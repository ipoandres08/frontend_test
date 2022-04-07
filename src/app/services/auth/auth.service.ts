import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  setUser(): void{
    let dataUser = {name: 'Info Yapi', email : 'info@yapi.com'}
    localStorage.setItem('session',JSON.stringify(dataUser));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getEmail(): string | null{
    return localStorage.getItem('email');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'info@yapi.com' && password === '12345678') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      this.setUser();
      return of({ name: '', email: '' });
    }
    return throwError(new Error('Failed to login'));
  }
}