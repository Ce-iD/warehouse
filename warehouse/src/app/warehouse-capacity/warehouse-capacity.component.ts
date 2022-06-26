import { Component, OnInit } from '@angular/core';
import {WarehouseCapacity} from "./warehouse-capacity";

@Component({
  selector: 'app-warehouse-capacity',
  templateUrl: './warehouse-capacity.component.html',
  styleUrls: ['./warehouse-capacity.component.css']
})
export class WarehouseCapacityComponent implements OnInit {

  public warehouseCapacity: WarehouseCapacity[] | undefined;
  public title: string = 'موجودی';
  public warehouseTitle: string = 'تمام انبارها';
  public editMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.warehouseCapacity = [
      {
        id: 1,
        name: 'تخته وايت برد',
        capacity: 20,
        unit: 1,
        expirationDate:'ندارد',
        warehouse: 1,
        warehouseTitle: 'مرکزی',
        warehouseMas:'آقای زال'
      },
      {
        id: 2,
        name: 'برنج',
        capacity:500,
        unit: 2,
        expirationDate:'1403/01/05',
        warehouse: 1,
        warehouseTitle: 'مرکزی',
        warehouseMas: 'آقای زال'
      },
      {
        id: 3,
        name: 'کنسرو لوبیا',
        capacity:1000,
        unit: 3,
        expirationDate:'1401/12/13',
        warehouse: 3,
        warehouseTitle:'شکوفه',
        warehouseMas:'خانم رنجبر'
      },
      {
        id: 3,
        name: 'کنسرو لوبیا',
        capacity:1000,
        unit: 3,
        expirationDate:'1401/12/13',
        warehouse: 3,
        warehouseTitle:'شکوفه',
        warehouseMas:'خانم رنجبر'
      },
      {
        id: 3,
        name: 'کنسرو لوبیا',
        capacity:1000,
        unit: 3,
        expirationDate:'1401/12/13',
        warehouse: 3,
        warehouseTitle:'شکوفه',
        warehouseMas:'خانم رنجبر'
      },
      {
        id: 3,
        name: 'کنسرو لوبیا',
        capacity:1000,
        unit: 3,
        expirationDate:'1401/12/13',
        warehouse: 3,
        warehouseTitle:'شکوفه',
        warehouseMas:'خانم رنجبر'
      },
      {
        id: 3,
        name: 'کنسرو لوبیا',
        capacity:1000,
        unit: 3,
        expirationDate:'1401/12/13',
        warehouse: 3,
        warehouseTitle:'شکوفه',
        warehouseMas:'خانم رنجبر'
      },
      {
        id: 3,
        name: 'کنسرو لوبیا',
        capacity:1000,
        unit: 3,
        expirationDate:'1401/12/13',
        warehouse: 3,
        warehouseTitle:'شکوفه',
        warehouseMas:'خانم رنجبر'
      },
    ];
  }

}
