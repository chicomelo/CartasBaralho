import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Naipe } from '../../models/naipe';
import { ListaNaipesComponent } from './lista-naipes.component';

describe('ListaNaipesComponent', () => {
  let component: ListaNaipesComponent;
  let fixture: ComponentFixture<ListaNaipesComponent>;

  const naipes: Naipe[] = [
    new Naipe('Paus', '♣', 'preto'),
    new Naipe('Copas', '♥', 'vermelho'),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNaipesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaNaipesComponent);
    component = fixture.componentInstance;
    component.naipes = naipes;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the suit options', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const botoes = compiled.querySelectorAll('button');

    expect(botoes.length).toBe(2);
    expect(compiled.textContent).toContain('Paus');
    expect(compiled.textContent).toContain('Copas');
  });

  it('should emit the selected suit when clicked', () => {
    spyOn(component.naipeEscolhido, 'emit');

    const compiled = fixture.nativeElement as HTMLElement;
    const primeiroBotao = compiled.querySelector('button') as HTMLButtonElement;

    primeiroBotao.click();

    expect(component.naipeEscolhido.emit).toHaveBeenCalledWith(naipes[0]);
  });
});
