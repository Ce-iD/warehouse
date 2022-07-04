import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseInformation} from './base-information';
import {BaseInformationService} from './base-information.service';

@Component({
  selector: 'app-base-information-edit',
  templateUrl: './base-information-edit.component.html',
  styleUrls: ['./base-information-edit.component.css']
})
export class BaseInformationEditComponent implements OnInit {

  public baseInformation: BaseInformation;
  public baseInformations?: BaseInformation[];
  public editLoadId?: string;
  public baseInformationTitle: string = '';
  public editMode: boolean = false;
  @Input() public baseInformationId: string = '';
  @Output() public editModeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  baseInformationHeader?: string;
  plusMode: any;

  constructor(
    private baseInformationService: BaseInformationService,
  ) {
    this.baseInformation = new BaseInformation();
  }

  ngOnInit(): void {
    if (this.baseInformationId != '')
      this.onLoad();
  }

  onLoad() {
    this.baseInformation = new BaseInformation();
    this.baseInformationService.loadBaseInformation(this.baseInformationId).subscribe(baseInformation => {
      this.baseInformation = baseInformation;
    });
  }

  save() {
    this.baseInformationService.saveBaseInformation(this.baseInformation).subscribe(baseInformation => {
      success: {
        this.switchToGrid();
      }
    })
  }

  switchToGrid() {
    this.baseInformation = new BaseInformation();
    this.editModeEmitter.emit(false);
  }

  selectBaseInformation() {
    this.editMode = true;
    if (this.baseInformationHeader == 'gender')
      this.baseInformationTitle = 'جنسيت';
    else if (this.baseInformationHeader == 'wareType')
      this.baseInformationTitle = 'نوع كالا';
    else if (this.baseInformationHeader == 'wareUnit')
      this.baseInformationTitle = 'واحد كالا';
    else
      this.editMode = false;
    this.baseInformationService.getAllBaseInformation().subscribe(baseInformation => {
      this.baseInformations = baseInformation;
    })
  }
}
