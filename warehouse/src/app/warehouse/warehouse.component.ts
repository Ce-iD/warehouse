import {Component, Input, OnInit} from '@angular/core';
import {Warehouse} from "./warehouse";
import {WarehouseService} from './warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  public warehouses: Warehouse[] | undefined;
  public title: string = 'انبار';
  public warehouseTitle: string = 'بهار';
  @Input() sourceLoad: boolean = true;
  public editMode: boolean = false;

  constructor(private warehouseService: WarehouseService) {
  }

  ngOnInit(): void {
  /*  this.warehouses = [
      {
        id: 1,
        name: 'مرکزی',
        capacity: 2000,
        location: 'ساختمان مرکزی',
        mas: 1,
      },
      {
        id: 2,
        name: 'شماره یک',
        capacity: 700,
        location: 'ساختمان یک',
        mas: 3,
      },
      {
        id: 3,
        name: 'شکوفه',
        capacity: 800,
        location: 'ساختمان شکوفه',
        mas: 2,
      },
      {
        id: 4,
        name: 'بهار',
        capacity: 600,
        location: 'ساختمان بهار',
        mas: 5,
      },
    ];*/
  }

  onLoad() {
    this.warehouseService.getAllWarehouses().subscribe(warehouses => {
      console.log(warehouses);
      this.warehouses = warehouses;
    });
  }

  switchToEditMode() {
    this.editMode = true;
  }

}
