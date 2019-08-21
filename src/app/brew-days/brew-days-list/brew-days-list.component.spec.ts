import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewDaysListComponent } from './brew-days-list.component';

describe('BrewDaysListComponent', () => {
  let component: BrewDaysListComponent;
  let fixture: ComponentFixture<BrewDaysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewDaysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewDaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
