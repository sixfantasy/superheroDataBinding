import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaSuperHeroeComponent } from './ficha-super-heroe.component';

describe('FichaSuperHeroeComponent', () => {
  let component: FichaSuperHeroeComponent;
  let fixture: ComponentFixture<FichaSuperHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichaSuperHeroeComponent]
    });
    fixture = TestBed.createComponent(FichaSuperHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
