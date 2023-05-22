import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstruturasComponent } from './listar-estruturas.component';

describe('ListarEstruturasComponent', () => {
  let component: ListarEstruturasComponent;
  let fixture: ComponentFixture<ListarEstruturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEstruturasComponent]
    });
    fixture = TestBed.createComponent(ListarEstruturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
