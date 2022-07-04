import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseInventoryComponent } from './warehouse-inventory.component';

describe('WarehouseCapacityComponent', () => {
  let component: WarehouseInventoryComponent;
  let fixture: ComponentFixture<WarehouseInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
