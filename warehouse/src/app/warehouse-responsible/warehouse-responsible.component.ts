import {Component, Input, OnInit} from '@angular/core';
import {WarehouseResponsible} from "./warehouse-responsible";
import {WarehouseResponsibleService} from './warehouse-responsible.service';

@Component({
  selector: 'app-warehouse-responsible',
  templateUrl: './warehouse-responsible.component.html',
  styleUrls: ['./warehouse-responsible.component.css']
})
export class WarehouseResponsibleComponent implements OnInit {

  public warehouseResponsibles?: WarehouseResponsible[];
  public warehouseResponsibleSearch?: WarehouseResponsible;
  public title: string = 'مسئولین انبار';
  public warehouseResponsibleTitle: string = '';
  @Input() sourceLoad: boolean = true;
  public editModeTitle: string = 'ویرایش مسئول انبار';
  public editMode: boolean = false;
  public editLoadId: string = '';

  constructor(
    private warehouseResponsibleService: WarehouseResponsibleService
  ) {
    this.warehouseResponsibleSearch = new WarehouseResponsible();
  }

  ngOnInit(): void {
    this.onload();
  }

  onload() {
    if (!this.editMode)
    this.warehouseResponsibleService.getAllWarehouseResponsible().subscribe(warehouseResponsible => {
      this.warehouseResponsibles = warehouseResponsible;
      console.log(warehouseResponsible);
    });
  }

  reload(): void {
    if (this.editMode) {
      console.log('if');
    } else {
      this.onload();
    }
  }

  editModeBack(editMode: boolean): void {
    this.editLoadId = '';
    this.editMode = editMode;
    this.onload();
  }

  deleteWarehouseResponsible(warehouseResponsible: WarehouseResponsible) {
    this.warehouseResponsibleService.deleteWarehouseResponsible(warehouseResponsible).subscribe(data => {
      console.log(data);
    });
  }

  switchToEditMode(loadId: string) {
    this.editLoadId = loadId;
    this.editModeTitle = '';
    this.editMode = true;
  }
}
