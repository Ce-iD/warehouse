import {Component, Input, OnInit} from '@angular/core';
import {Warehouse} from "./warehouse";
import {WarehouseService} from './warehouse.service';
import {WareService} from "../ware/ware.service";
import {Ware} from "../ware/ware";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  public warehouses?: Warehouse[];
  public warehouseSearch?: Warehouse;
  public wares?: Ware[];
  public title: string = 'انبار';
  public warehouseTitle: string = 'بهار';
  @Input() sourceLoad: boolean = true;
  public editModeTitle: string = 'ویرایش انبار';
  public editMode: boolean = false;
  public editLoadId: string = '';
  public importDiv: boolean = false;
  public exportDiv: boolean = false;

  constructor(
    private warehouseService: WarehouseService,
    private wareService: WareService,
  ) {
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
    this.editMode ? console.log('if') : this.onLoad();
  }

  editModeBack($event: any): void {
    console.log($event);
    this.editLoadId = '';
    this.editMode = $event;
    this.onLoad();
  }

  deleteWarehouse(warehouse: Warehouse) {
    this.warehouseService.deleteWarehouse(warehouse).subscribe(data => {
      this.onLoad();
    });
  }

  switchToEditMode(loadId: string) {
    this.editLoadId = loadId;
    this.editModeTitle = 'تعریف انبار جدید';
    this.editMode = true;
  }

  importWare(warehouse: Warehouse) {
    this.wareService.getAllWare().subscribe(wares => {
      this.wares = wares;
    });
    this.exportDiv = false;
    this.importDiv = !this.importDiv;
  }

  exportWare(warehouse: Warehouse) {
    this.importDiv = false;
    this.exportDiv = !this.exportDiv;
  }

  closeModal() {
    this.importDiv = this.importDiv = false;
    this.exportDiv = this.exportDiv = false;
  }
}
