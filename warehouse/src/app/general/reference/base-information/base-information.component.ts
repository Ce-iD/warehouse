import {Component, Input, OnInit} from '@angular/core';
import {BaseInformation} from "./base-information";
// import {MatTreeModule} from '@angular/material/tree';
import {BaseInformationService} from "./base-information.service";

@Component({
  selector: 'app-base-information',
  templateUrl: './base-information.component.html',
  styleUrls: ['./base-information.component.css']
})
export class BaseInformationComponent implements OnInit {

  public baseInformations?: BaseInformation[];
  public baseInformationSearch?: BaseInformation;
  public title: string = 'اطلاعات اولیه';
  public baseInformationTitle: string = '';
  @Input() sourceLoad: boolean = true;
  public editModeTitle: string = 'ویرایش اطلاعات اولیه';
  public editMode: boolean = true;
  public editLoadId: string = '';

  // public tree: MatTreeModule;
  constructor(
    private BaseInformationService: BaseInformationService,
  ) {
  }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.BaseInformationService.getAllBaseInformation().subscribe(baseInformations => {
      this.baseInformations = baseInformations;
    })
  }

  reload(): void {
    this.editMode ? console.log('if') : this.onLoad();
  }

  editModeBack(editMode: any) {
    this.editLoadId = '';
    this.editMode = editMode;
    this.onLoad();
  }

  deleteBaseInformation(baseInformation: BaseInformation) {
    this.BaseInformationService.deleteBaseInformation(baseInformation).subscribe(data => {
      this.onLoad();
    })
  }

  switchToEditMode(loadId: any) {
    this.editLoadId = loadId;
    this.editModeTitle = 'تعریف اطلاعات اولیه';
    this.editMode = true;
  }
}
