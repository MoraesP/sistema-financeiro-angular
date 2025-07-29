import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BotaoPadraoComponent } from '../../atomos/botao-padrao/botao-padrao.component';
import { CartaoComponent } from '../../atomos/cartao/cartao.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [CommonModule, BotaoPadraoComponent, CartaoComponent],
  templateUrl: './cartoes.component.html',
  styleUrl: './cartoes.component.scss',
})
export class CartoesComponent {
  private userService = inject(UserService);

  get cartoes() {
    return this.userService.contaUsuario()?.cards;
  }
}
