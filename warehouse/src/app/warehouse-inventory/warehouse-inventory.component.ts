import {Component, Input, OnInit} from '@angular/core';
import {WarehouseInventory} from "./warehouse-inventory";
import {WarehouseInventoryService} from './warehouse-inventory.service';
// import {FlatTreeControl} from '@angular/cdk/tree';
// import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

// import {TreeModule} from 'primeng/tree';
// import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-warehouse-inventory',
  templateUrl: './warehouse-inventory.component.html',
  styleUrls: ['./warehouse-inventory.component.css']
})
export class WarehouseInventoryComponent implements OnInit {

  public warehouseInventories?: WarehouseInventory[];
  public title: string = 'موجودی';
  public warehouseTitle: string = 'تمام انبارها';
  public editMode: boolean = false;
  @Input() public warehouseId: string = "";

  constructor(private warehouseInventoryService: WarehouseInventoryService) {
  }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    if (this.warehouseId != "")
      this.warehouseInventoryService.getByWarehouseId(this.warehouseId).subscribe(warehouseInventories => {
        this.warehouseInventories = warehouseInventories;
      });
    else
      this.warehouseInventoryService.getAllWarehouseInventory().subscribe(warehouseInventories => {
        this.warehouseInventories = warehouseInventories;
      });
  }

  reload() {
    this.onLoad();
  }
}
