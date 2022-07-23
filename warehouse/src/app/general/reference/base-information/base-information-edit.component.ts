import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BaseInformation} from './base-information';
import {BaseInformationService} from './base-information.service';
import {jqxTreeComponent} from "jqwidgets-ng/jqxtree";

@Component({
  selector: 'app-base-information-edit',
  templateUrl: './base-information-edit.component.html',
  styleUrls: ['./base-information-edit.component.css']
})
export class BaseInformationEditComponent implements OnInit, AfterViewInit {

  public baseInformation: BaseInformation;
  public baseInformations?: BaseInformation[];
  // public iBaseInformations?: IBaseInformation;
  public editLoadId?: string;
  public baseInformationTitle: string = '';
  public editMode: boolean = false;
  @Input() public baseInformationId: string = '';
  @Output() public editModeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  baseInformationHeader!: string;
  plusMode: any;


  @ViewChild('treeReference', {static: false}) tree!: jqxTreeComponent;

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.tree.selectItem(null);
    // });
  }

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
    this.baseInformationService.getAllBaseInformation().subscribe(baseInformations => {
      // this.baseInformations = baseInformations;
      this.baseInformations = this.removeNull(baseInformations, this.baseInformationHeader);
    })
  }

  removeNull(objects: any, type: any) {
    objects.forEach((object: { [x: string]: null; }, index: number) => {
      if (object[type] == null) {
        delete objects[index];
      } else {
      }
    });
    return objects;
  }

  // public tree1?: IBaseInformation;
  // public trees?: IBaseInformation[];

  // makeTree(objects: any) {
  //   console.log('makeTree');
  //   console.log(objects);
  //   objects.forEach((object: any) => {
  //     // @ts-ignore
  //     this.tree1['label'] = object[this.baseInformationHeader];
  //     console.log(this.tree1);
  //     if (this.tree1)
  //         { // @ts-ignore
  //           this.trees.push(this.tree1);
  //         }
  //       // if (this.trees)
  //   });
  //   console.log(this.trees);
  // }
}
