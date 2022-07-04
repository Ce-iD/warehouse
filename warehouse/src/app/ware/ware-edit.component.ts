import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseInformation} from '../general/reference/base-information/base-information';
import {Ware} from "./ware";
import {WareService} from "./ware.service";

@Component({
  selector: 'app-ware-edit',
  templateUrl: './ware-edit.component.html',
  styleUrls: ['./ware-edit.component.css']
})
export class WareEditComponent implements OnInit {

  public ware: Ware;
  public baseInformations?: BaseInformation[];
  public wareUnit?: BaseInformation[];
  public editLoadId?: string;
  @Input() public wareId: string = '';
  @Output() public editModeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private wareService: WareService,
  ) {
    this.ware = new Ware();
  }

  ngOnInit(): void {
    if (this.wareId != '') {
      this.onLoad();
    }
    this.wareService.getAllBaseInformation().subscribe(baseInformation => {
      console.log(baseInformation);
      this.baseInformations = baseInformation;
    });
  }

  onLoad() {
    this.ware = new Ware();
    this.wareService.loadWare(this.wareId).subscribe(ware => {
      this.ware = ware;
    });
  }

  save() {
    this.wareService.saveWare(this.ware).subscribe(ware => {
      success: {

        this.switchToGrid();
      }
    })
  }

  switchToGrid() {
    this.ware = new Ware();
    this.editModeEmitter.emit(false);
  }
}
