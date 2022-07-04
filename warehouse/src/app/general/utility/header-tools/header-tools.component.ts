import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-tools',
  templateUrl: './header-tools.component.html',
  styleUrls: ['./header-tools.component.css']
})
export class HeaderToolsComponent implements OnInit {

  @Input() editMode: boolean = false;
  @Output() editModeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() reloadEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  switchToEditMode() {
    if (!this.editMode) {
      this.editModeEmitter.emit(true);
      this.editMode = true;
    }
  }

  switchToListMode() {
    if (this.editMode) {
      this.editModeEmitter.emit(false);
      this.editMode = false;
    }
  }

  reload() {
    this.reloadEmitter.emit(true);
    if (this.editMode) {
    } else {
    }
  }
}
