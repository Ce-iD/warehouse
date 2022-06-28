import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Warehouse} from "./warehouse";
import {WarehouseService} from './warehouse.service';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {

  public warehouse: Warehouse;
  public editLoadId?: string;
  @Input() public warehouseId: string = '';
  @Output() public editModeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private warehouseService: WarehouseService
  ) {
    this.warehouse = new Warehouse;
  }

  ngOnInit(): void {
    if (this.warehouseId != '')
      this.onLoad();
  }

  onLoad() {
    this.warehouse = new Warehouse();
    this.warehouseService.loadWarehouse(this.warehouseId).subscribe(warehouse => {
      this.warehouse = warehouse;
    })
  }

  save() {
    this.warehouseService.saveWarehouse(this.warehouse).subscribe(data => {
      success: {
        this.switchToGrid();
      }
    });
  }

  switchToGrid() {
    console.log('switch');
    this.warehouse = new Warehouse();
    this.editModeEmitter.emit(false);
  }
}
