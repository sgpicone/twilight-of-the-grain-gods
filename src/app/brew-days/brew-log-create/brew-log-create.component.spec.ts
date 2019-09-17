import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewLogCreateComponent } from './brew-log-create.component';

describe('BrewLogCreateComponent', () => {
  let component: BrewLogCreateComponent;
  let fixture: ComponentFixture<BrewLogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewLogCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewLogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
