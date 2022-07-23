import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationBottomComponent } from './operation-bottom.component';

describe('OperationBottomComponent', () => {
  let component: OperationBottomComponent;
  let fixture: ComponentFixture<OperationBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
