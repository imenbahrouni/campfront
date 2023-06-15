import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueManagementComponent } from './boutique-management.component';

describe('BoutiqueManagementComponent', () => {
  let component: BoutiqueManagementComponent;
  let fixture: ComponentFixture<BoutiqueManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutiqueManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiqueManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
