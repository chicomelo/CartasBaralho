import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Naipe } from '../../models/naipe';

@Component({
  selector: 'app-lista-naipes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lista-naipes.component.html',
  styleUrl: './lista-naipes.component.css'
})
export class ListaNaipesComponent {

  @Input({
    required: true,
  })
  public naipes!: Naipe[];

  @Input()
  public naipeSelecionado?: Naipe;

  @Output()
  public naipeEscolhido = new EventEmitter<Naipe>();

  public escolherNaipe(naipe: Naipe): void {
    this.naipeEscolhido.emit(naipe);
  }

}
