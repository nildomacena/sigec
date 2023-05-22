import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharEstruturaComponent } from './detalhar-estrutura.component';

describe('DetalharEstruturaComponent', () => {
  let component: DetalharEstruturaComponent;
  let fixture: ComponentFixture<DetalharEstruturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalharEstruturaComponent]
    });
    fixture = TestBed.createComponent(DetalharEstruturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
