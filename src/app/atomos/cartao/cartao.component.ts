import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-cartao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.scss',
})
export class CartaoComponent {
  @Input() cartao!: Card;
  @Input() tipo: 'fisico' | 'digital' = 'fisico';
}
