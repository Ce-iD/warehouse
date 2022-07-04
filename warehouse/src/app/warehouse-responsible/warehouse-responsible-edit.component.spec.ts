import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseResponsibleEditComponent } from './warehouse-responsible-edit.component';

describe('WarehouseResponsibleEditComponent', () => {
  let component: WarehouseResponsibleEditComponent;
  let fixture: ComponentFixture<WarehouseResponsibleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseResponsibleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseResponsibleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
