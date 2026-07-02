import { Component, Input } from '@angular/core';

import { Naipe } from '../../models/naipe';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent {

  @Input({
    required: true,
  })
  public naipe!: Naipe;

  @Input({
    required: true,
  })
  public valor!: string;

}
