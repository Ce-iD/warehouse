import {Component, Input, OnInit} from '@angular/core';
import {Ware} from "./ware";
import {WareService} from './ware.service';

@Component({
  selector: 'app-ware',
  templateUrl: './ware.component.html',
  styleUrls: ['./ware.component.css']
})
export class WareComponent implements OnInit {

  public wares?: Ware[];
  public wareSearch?: Ware;
  public title: string = 'کالا';
  public wareTitle: string = '';
  @Input() sourceLoad: boolean = true;
  public editModeTitle: string = 'ویرایش کالا';
  public editMode: boolean = false;
  public editLoadId: string = '';

  constructor(
    private wareService: WareService
  ) {
  }

  ngOnInit(): void {

    this.onLoad();
  }

  onLoad() {
    this.wareService.getAllWare().subscribe(wares => {
      this.wares = wares;
    });
  }

  reload(): void {
    this.editMode ? console.log('if') : this.onLoad();
  }

  editModeBack(editMode: any): void {
    this.editLoadId = '';
    this.editMode = editMode;
    this.onLoad();
  }

  deleteWare(ware: Ware) {
    this.wareService.deleteWare(ware).subscribe(data => {
      this.onLoad();
    });
  }

  switchToEditMode(loadId: any) {
    this.editLoadId = loadId;
    this.editModeTitle = 'تعریف کالای جدید';
    this.editMode = true;
  }
}
