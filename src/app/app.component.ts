import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CartaComponent } from './components/carta/carta.component';
import { ListaNaipesComponent } from './components/lista-naipes/lista-naipes.component';
import { ListaValoresComponent } from './components/lista-valores/lista-valores.component';
import { Naipe } from './models/naipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ListaNaipesComponent,
    ListaValoresComponent,
    CartaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected naipeSelecionado?: Naipe;
  protected valorSelecionado?: string;

  protected naipes: Naipe[] = [
    new Naipe('Paus', '♣', 'preto'),
    new Naipe('Copas', '♥', 'vermelho'),
    new Naipe('Espadas', '♠', 'preto'),
    new Naipe('Ouro', '♦', 'vermelho'),
  ];

  protected valores: string[] = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
}
