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
  public userTitle: string | undefined;
  @Input() sourceLoad: boolean = true;
  public editModeTitle: string = 'ویرایش کاربر';
  public editMode: boolean = false;
  editLoadId?: string;

  constructor(private personService: PersonService) {
    this.personSearch = new Person();
  }

  ngOnInit(): void {
    this.onLoad();
  }

  switchToEditMode(loadId: any) {
    this.editLoadId = loadId;
    this.editModeTitle = 'تعریف کاربر جدید';
    this.editMode = true;
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
}
