import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USUARIO = 'user';
  private readonly TOKEN_KEY = 'authToken';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private userService: UserService) {}

  setInfo(token: string, usuario: User): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.USUARIO, JSON.stringify(usuario));
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  removeToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.USUARIO);
      localStorage.removeItem(this.TOKEN_KEY);
      this.userService.contaUsuario.set(null);
    }
  }

  isAuthenticated(): boolean {
    return !this.isTokenExpired();
  }

  private isTokenExpired(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }
    const token = this.getToken();
    if (!token) {
      return true;
    }

    try {
      const decodedToken: { exp: number } = jwtDecode(token);
      const expirationDate = decodedToken.exp * 1000;
      const now = new Date().getTime();
      return expirationDate < now;
    } catch (error) {
      return true;
    }
  }
}
