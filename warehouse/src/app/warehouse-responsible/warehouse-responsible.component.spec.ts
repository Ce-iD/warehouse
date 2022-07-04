import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseResponsibleComponent } from './warehouse-responsible.component';

describe('WarehouseResponsibleComponent', () => {
  let component: WarehouseResponsibleComponent;
  let fixture: ComponentFixture<WarehouseResponsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseResponsibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
