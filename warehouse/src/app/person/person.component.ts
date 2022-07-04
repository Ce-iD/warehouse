import {Component, Input, OnInit} from '@angular/core';
import {PersonService} from './person.service';
import {Person} from "./person";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public persons?: Person[];
  public personSearch?: Person;
  public title: string = 'کاربران';
  public personTitle: string = '';
  @Input() sourceLoad: boolean = true;
  public editModeTitle: string = 'ویرایش کاربر';
  public editMode: boolean = false;
  public editLoadId: string = '';

  constructor(
    private personService: PersonService
  ) {
    this.personSearch = new Person();
  }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.personService.getAllPerson().subscribe(persons => {
      this.persons = persons;
      console.log(persons);
    });
  }

  reload(): void {
    if (this.editMode) {
      console.log('if');
    } else {
      this.onLoad();
    }
  }

  editModeBack(editMode: boolean): void {
    this.editLoadId = '';
    this.editMode = editMode;
    this.onLoad();
  }

  deletePerson(person: Person) {
    this.personService.deletePerson(person).subscribe(data => {
      console.log(data);
    })
  }

  switchToEditMode(loadId: string) {
    this.editLoadId = loadId;
    this.editModeTitle = 'تعریف کاربر جدید';
    this.editMode = true;
  }
}
