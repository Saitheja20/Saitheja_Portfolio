import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFamilyComponent } from './create-family.component';

describe('CreateFamilyComponent', () => {
  let component: CreateFamilyComponent;
  let fixture: ComponentFixture<CreateFamilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFamilyComponent]
    });
    fixture = TestBed.createComponent(CreateFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
