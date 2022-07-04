import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseInformation} from './base-information';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseInformationService {


  private baseUrl: string = "http://localhost:8080/rest/baseInformation";

  constructor(private httpClient: HttpClient) {
  }

  getAllBaseInformation(): Observable<BaseInformation[]> {
    return this.httpClient.get<BaseInformation[]>(`${this.baseUrl}/getAll`);
  }

  loadBaseInformation(baseInformationId: string): Observable<BaseInformation> {
    return this.httpClient.get<BaseInformation>(`${this.baseUrl}/load/${baseInformationId}`);
  }

  saveBaseInformation(baseInformation: BaseInformation): Observable<BaseInformation> {
    return this.httpClient.post(`${this.baseUrl}/save`, baseInformation);
  }

  deleteBaseInformation(baseInformation: BaseInformation): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${baseInformation.id}`);
  }
}
