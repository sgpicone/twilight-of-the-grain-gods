import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltComponent } from './salt.component';

describe('SaltsComponent', () => {
  let component: SaltComponent;
  let fixture: ComponentFixture<SaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
