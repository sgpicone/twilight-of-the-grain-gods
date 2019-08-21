import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewDaysCreateComponent } from './brew-days-create.component';

describe('BrewDaysCreateComponent', () => {
  let component: BrewDaysCreateComponent;
  let fixture: ComponentFixture<BrewDaysCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewDaysCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewDaysCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
