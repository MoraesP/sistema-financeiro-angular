import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartaoComponent } from '../../atomos/cartao/cartao.component';
import { Card } from '../../models/card';

@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [CommonModule, CartaoComponent],
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss'],
})
export class CartoesComponent {
  @Input() cartoes: Card[] = [];

  bloquear(cartao: Card) {
    cartao.is_blocked = !cartao.is_blocked;
  }
}
