import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Person} from './person';
import {PersonService} from './person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  public person: Person;
  public editLoadId?: string;
  @Input() public personId: string = '';
  @Output() editModeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private personService: PersonService
  ) {
    this.person = new Person();
  }

  ngOnInit(): void {
    if (this.personId != '')
      this.onLoad();
  }

  onLoad() {
    this.person = new Person();
    this.personService.loadPerson(this.personId).subscribe(person => {
      this.person = person;
    });
  }

  save() {
    this.personService.savePerson(this.person).subscribe(data => {
      success: {
        this.switchToGrid();
      }
    });
  }

  switchToGrid() {
    this.person = new Person();
    this.editModeEmitter.emit(false);
  }
}
