import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ware} from "./ware";
import {BaseInformation} from '../general/reference/base-information/base-information';

@Injectable({
  providedIn: 'root'
})
export class WareService {

  private baseUrl: string = "http://localhost:8080/rest/ware";

  constructor(private httpClient: HttpClient) {
  }

  getAllWare(): Observable<Ware[]> {
    return this.httpClient.get<Ware[]>(`${this.baseUrl}/getAll`);
  }

  loadWare(wareId: string): Observable<Ware> {
    return this.httpClient.get<Ware>(`${this.baseUrl}/load/${wareId}`);
  }

  saveWare(ware: Ware): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/save`, ware);
  }

  deleteWare(ware: Ware): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${ware.id}`);
  }

  getAllBaseInformation(): Observable<BaseInformation[]> {
    return this.httpClient.get<BaseInformation[]>("http://localhost:8080/rest/baseInformation/getAll");
  }
}
