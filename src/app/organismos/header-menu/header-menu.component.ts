import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
  private readonly USUARIO = 'user';

  private router = inject(Router);
  private authService = inject(AuthService);

  get nomeUsuario() {
    const user: User = JSON.parse(localStorage.getItem(this.USUARIO)!);
    return user.username;
  }

  sair() {
    this.authService.removeToken();
    this.router.navigate(['/']);
  }
}
