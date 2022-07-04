import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseInventoryEditComponent } from './warehouse-inventory-edit.component';

describe('WarehouseInventoryEditComponent', () => {
  let component: WarehouseInventoryEditComponent;
  let fixture: ComponentFixture<WarehouseInventoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseInventoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseInventoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
