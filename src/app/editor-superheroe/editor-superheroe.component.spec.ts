import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorSuperheroeComponent } from './editor-superheroe.component';

describe('EditorSuperheroeComponent', () => {
  let component: EditorSuperheroeComponent;
  let fixture: ComponentFixture<EditorSuperheroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorSuperheroeComponent]
    });
    fixture = TestBed.createComponent(EditorSuperheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
