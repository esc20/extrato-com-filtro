import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Transacao } from '../../../../core/models/transacao.model';

@Component({
  selector: 'app-lista-transacoes',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe],
  templateUrl: './lista-transacoes.component.html',
  styleUrl: './lista-transacoes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaTransacoesComponent {
  // O componente filho "escuta" o que o pai envia
  transacoes = input<Transacao[]>([]);
}
