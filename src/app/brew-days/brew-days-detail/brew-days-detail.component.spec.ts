import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewDaysDetailComponent } from './brew-days-detail.component';

describe('BrewDaysDetailComponent', () => {
  let component: BrewDaysDetailComponent;
  let fixture: ComponentFixture<BrewDaysDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewDaysDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewDaysDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
