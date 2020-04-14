import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUsuariosComponent } from './agregar-usuarios.component';

describe('AgregarUsuariosComponent', () => {
  let component: AgregarUsuariosComponent;
  let fixture: ComponentFixture<AgregarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
