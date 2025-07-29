import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartaoComponent } from '../../atomos/cartao/cartao.component';
import { Card } from '../../models/card';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [CommonModule, CartaoComponent],
  templateUrl: './cartoes.component.html',
  styleUrl: './cartoes.component.scss',
})
export class CartoesComponent {
  private userService = inject(UserService);

  get cartoes() {
    return this.userService.contaUsuario()?.cards;
  }

  bloquear(cartao: Card) {
    cartao.is_blocked = !cartao.is_blocked;
  }
}
