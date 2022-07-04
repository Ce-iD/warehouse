import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WarehouseResponsible} from './warehouse-responsible';
import {WarehouseResponsibleService} from "./warehouse-responsible.service";
import {PersonService} from "../person/person.service";
import {Person} from '../person/person';
import {Warehouse} from "../warehouse/warehouse";
import { WarehouseService } from '../warehouse/warehouse.service';

@Component({
  selector: 'app-warehouse-responsible-edit',
  templateUrl: './warehouse-responsible-edit.component.html',
  styleUrls: ['./warehouse-responsible-edit.component.css']
})
export class WarehouseResponsibleEditComponent implements OnInit {

  public warehouseResponsible: WarehouseResponsible;
  public editLoadId?: string;
  @Input() public warehouseResponsibleId: string = '';
  @Output() editModeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  public persons?: Person[];
  public warehouses?: Warehouse[];

  constructor(
    private warehouseResponsibleService: WarehouseResponsibleService,
    private personService: PersonService,
    private warehouseService: WarehouseService,
  ) {
    this.warehouseResponsible = new WarehouseResponsible();
  }

  ngOnInit(): void {
    // this.persons.push(new Person());
    // if (this.warehouseResponsibleId != '')
    this.onload();
  }

  onload() {
    this.warehouseResponsible = new WarehouseResponsible();
    if (this.warehouseResponsibleId != '')
      this.warehouseResponsibleService.loadWarehouseResponsible(this.warehouseResponsibleId).subscribe(warehouseResponsible => {
        this.warehouseResponsible = warehouseResponsible;
      });
    this.personService.getAllPerson().subscribe(persons => {
      this.persons = persons;
      console.log(this.persons);
    });
    this.warehouseService.getAllWarehouses().subscribe(warehouses => {
      this.warehouses = warehouses;
    })

  }

  save() {
    console.log(this.warehouseResponsible);
    this.warehouseResponsibleService.saveWarehouseResponsible(this.warehouseResponsible).subscribe(data => {
      success: {
        this.switchToGrid();
      }
    });
  }

  switchToGrid() {
    this.warehouseResponsible = new WarehouseResponsible();
    this.editModeEmitter.emit(false);
  }
}
