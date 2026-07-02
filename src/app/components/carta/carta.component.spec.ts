import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Naipe } from '../../models/naipe';
import { CartaComponent } from './carta.component';

describe('CartaComponent', () => {
  let component: CartaComponent;
  let fixture: ComponentFixture<CartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaComponent);
    component = fixture.componentInstance;
    component.naipe = new Naipe('Copas', '♥', 'vermelho');
    component.valor = '7';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the selected value and suit', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('7');
    expect(compiled.textContent).toContain('♥');
  });

  it('should use the suit color class', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const carta = compiled.querySelector('.carta');

    expect(carta?.classList).toContain('vermelho');
  });
});
