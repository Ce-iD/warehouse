import {Component, Input, OnInit} from '@angular/core';
import {Warehouse} from "./warehouse";
import {WarehouseService} from './warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  public warehouses?: Warehouse[];
  public warehouseSearch?: Warehouse;
  public title: string = 'انبار';
  public warehouseTitle: string = 'بهار';
  @Input() sourceLoad: boolean = true;
  public editModeTitle: string = 'ویرایش انبار';
  public editMode: boolean = false;
  public editLoadId: string = '';

  constructor(
    private warehouseService: WarehouseService
  ) {
    this.warehouseSearch = new Warehouse();
  }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.warehouseService.getAllWarehouses().subscribe(warehouses => {
      this.warehouses = warehouses;
    });
  }

  reload(): void {
    if (this.editMode) {
      console.log('if');
    } else {
      this.onLoad();
    }
  }

  editModeBack(editMode: boolean): void {
    this.editLoadId = '';
    this.editMode = editMode;
    this.onLoad();
  }

  deleteWarehouse(warehouse: Warehouse) {
    this.warehouseService.deleteWarehouse(warehouse).subscribe(data => {
      this.onLoad();
    });
  }

  switchToEditMode(loadId: string) {
    this.editLoadId = loadId;
    this.editModeTitle = 'تعریف کاربر جدید';
    this.editMode = true;
  }

}
