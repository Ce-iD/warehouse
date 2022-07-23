import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ware} from "../ware/ware";
import {WarehouseInventory} from "./warehouse-inventory";
import {WarehouseInventoryService} from "./warehouse-inventory.service";

@Component({
  selector: 'app-warehouse-inventory-edit',
  templateUrl: './warehouse-inventory-edit.component.html',
  styleUrls: ['./warehouse-inventory-edit.component.css']
})
export class WarehouseInventoryEditComponent implements OnInit {

  public warehouseInventory: WarehouseInventory = new WarehouseInventory();
  @Input() public wares?: Ware[];
  @Input() public warehouseId?: string;
  @Output() public switchToGrid: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    private warehouseInventoryService: WarehouseInventoryService,
  ) {
  }

  ngOnInit(): void {
    this.warehouseInventory.warehouseId = this.warehouseId;
    // this.warehouseInventory = new WarehouseInventory();
  }

  buttonClicked($event: string) {
    console.log($event);
    switch ($event) {
      case 'save':
        this.save();
        break;
      case 'reload':
        break;
      case 'return':
        this.switchToGrid.emit(true);
        break;
    }
  }

  private save() {
    this.warehouseInventoryService.saveWarehouseInventory(this.warehouseInventory)
      .subscribe(warehouseInventory => {
      });
  }
}
