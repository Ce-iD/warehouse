import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-operation-bottom',
  templateUrl: './operation-bottom.component.html',
  styleUrls: ['./operation-bottom.component.css']
})
export class OperationBottomComponent implements OnInit {

  @Output() public buttonEmitter: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClicked(buttonClicked: string) {
    this.buttonEmitter.emit(buttonClicked);
  }

}
