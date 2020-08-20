import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegCreateComponent } from './keg-create.component';

describe('KegCreateComponent', () => {
  let component: KegCreateComponent;
  let fixture: ComponentFixture<KegCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
