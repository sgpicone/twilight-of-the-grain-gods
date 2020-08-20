import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegSaniLogCreateComponent } from './keg-sani-log-create.component';

describe('KegSaniLogCreateComponent', () => {
  let component: KegSaniLogCreateComponent;
  let fixture: ComponentFixture<KegSaniLogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegSaniLogCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegSaniLogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
