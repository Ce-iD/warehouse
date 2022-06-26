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
  @Input() public personId: string = '';
  @Output() editModeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private personService: PersonService) {
    this.person = new Person();
  }

  ngOnInit(): void {
  }

  onLoad() {
    this.personService.loadPerson(this.personId).subscribe(person => {
      this.person = person;
    });
  }

  save() {
    console.log(this.person);
    this.personService.savePerson(this.person).subscribe(data => {
    })
  }
}
