import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-valores',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lista-valores.component.html',
  styleUrl: './lista-valores.component.css'
})
export class ListaValoresComponent {

  @Input({
    required: true,
  })
  public valores!: string[];

  @Input()
  public valorSelecionado?: string;

  @Output()
  public valorEscolhido = new EventEmitter<string>();

  public escolherValor(valor: string): void {
    this.valorEscolhido.emit(valor);
  }

}
