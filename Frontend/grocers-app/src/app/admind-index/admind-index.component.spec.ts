import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindIndexComponent } from './admind-index.component';

describe('AdmindIndexComponent', () => {
  let component: AdmindIndexComponent;
  let fixture: ComponentFixture<AdmindIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
