import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-padrao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao-padrao.component.html',
  styleUrl: './botao-padrao.component.scss',
})
export class BotaoPadraoComponent {
  @Input() corFonte = '#FFFFFF';
  @Input() corFundo = '#FF5031';
  @Input() corBorda = '#FF5031';
  @Input() texto = 'Clique aqui!';
  @Input() desabilitado = false;
  @Output() clickEvent = new EventEmitter<void>();
}
