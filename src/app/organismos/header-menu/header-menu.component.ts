import { Component } from '@angular/core';
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

  get nomeUsuario() {
    const user: User = JSON.parse(localStorage.getItem(this.USUARIO)!);
    return user.username;
  }
}
