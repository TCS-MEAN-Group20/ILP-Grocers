import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratereportsComponent } from './generatereports.component';

describe('GeneratereportsComponent', () => {
  let component: GeneratereportsComponent;
  let fixture: ComponentFixture<GeneratereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratereportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
