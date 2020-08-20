import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegSaleLogCreateComponent } from './keg-sale-log-create.component';

describe('KegSaleLogCreateComponent', () => {
  let component: KegSaleLogCreateComponent;
  let fixture: ComponentFixture<KegSaleLogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegSaleLogCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegSaleLogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
