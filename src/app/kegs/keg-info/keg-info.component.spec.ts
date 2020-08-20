import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegInfoComponent } from './keg-info.component';

describe('KegInfoComponent', () => {
  let component: KegInfoComponent;
  let fixture: ComponentFixture<KegInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
