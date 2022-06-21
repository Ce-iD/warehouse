import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public baseUrl: string = "http://localhost:8080/rest/person";
  constructor(private httpClient: HttpClient) { }

  getAllPerson():Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.baseUrl}/getAll`);
  }
}
