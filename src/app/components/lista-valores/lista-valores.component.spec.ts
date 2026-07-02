import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaValoresComponent } from './lista-valores.component';

describe('ListaValoresComponent', () => {
  let component: ListaValoresComponent;
  let fixture: ComponentFixture<ListaValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaValoresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaValoresComponent);
    component = fixture.componentInstance;
    component.valores = ['A', 'J', 'Q'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the card values', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const botoes = compiled.querySelectorAll('button');

    expect(botoes.length).toBe(3);
    expect(compiled.textContent).toContain('A');
    expect(compiled.textContent).toContain('J');
    expect(compiled.textContent).toContain('Q');
  });

  it('should emit the selected value when clicked', () => {
    spyOn(component.valorEscolhido, 'emit');

    const compiled = fixture.nativeElement as HTMLElement;
    const primeiroBotao = compiled.querySelector('button') as HTMLButtonElement;

    primeiroBotao.click();

    expect(component.valorEscolhido.emit).toHaveBeenCalledWith('A');
  });
});
