import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEditerContactComponent } from './ajouter-editer-contact.component';

describe('AjouterEditerContactComponent', () => {
  let component: AjouterEditerContactComponent;
  let fixture: ComponentFixture<AjouterEditerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEditerContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEditerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
