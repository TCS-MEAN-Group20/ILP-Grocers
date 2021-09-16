import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersShopComponent } from './users-shop.component';

describe('UsersShopComponent', () => {
  let component: UsersShopComponent;
  let fixture: ComponentFixture<UsersShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
