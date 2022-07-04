import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {WarehouseResponsible} from './warehouse-responsible';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WarehouseResponsibleService {

  public baseUrl: string = "http://localhost:8080/rest/warehouseResponsible";

  constructor(private httpClient: HttpClient) {
  }

  getAllWarehouseResponsible(): Observable<WarehouseResponsible[]> {
    return this.httpClient.get<WarehouseResponsible[]>(`${this.baseUrl}/getAll`);
  }

  loadWarehouseResponsible(warehouseResponsibleId: string): Observable<WarehouseResponsible> {
    return this.httpClient.get<WarehouseResponsible>(`${this.baseUrl}/load/${warehouseResponsibleId}`);
  }

  saveWarehouseResponsible(warehouseResponsible: WarehouseResponsible): Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseUrl}/save`, warehouseResponsible);
  }

  deleteWarehouseResponsible(warehouseResponsible: WarehouseResponsible): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${warehouseResponsible.id}`);
  }
}
