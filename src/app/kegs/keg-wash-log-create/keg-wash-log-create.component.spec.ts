import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegWashLogCreateComponent } from './keg-wash-log-create.component';

describe('KegWashLogCreateComponent', () => {
  let component: KegWashLogCreateComponent;
  let fixture: ComponentFixture<KegWashLogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegWashLogCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegWashLogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
