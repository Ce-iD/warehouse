import { Component, OnInit } from '@angular/core';
import {WarehouseInventory} from "./warehouse-inventory";
// import {FlatTreeControl} from '@angular/cdk/tree';
// import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

// import {TreeModule} from 'primeng/tree';
// import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-warehouse-capacity',
  templateUrl: './warehouse-inventory.component.html',
  styleUrls: ['./warehouse-inventory.component.css']
})
export class WarehouseInventoryComponent implements OnInit {

  public warehouseInventories?: WarehouseInventory[];
  public title: string = 'موجودی';
  public warehouseTitle: string = 'تمام انبارها';
  public editMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.warehouseInventories?.push(new WarehouseInventory(
      '135-1545','شکوفه',300, '1399/10/01',  '10', 'شکوفه', 's43jds-djer','dfkj343v'
    ));
  }

}
