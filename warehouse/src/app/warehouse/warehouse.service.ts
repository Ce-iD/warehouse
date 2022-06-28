import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Warehouse} from './warehouse';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private baseUrl: string = "http://localhost:8080/rest/warehouse";

  constructor(private httpClient: HttpClient) {
  }

  getAllWarehouses(): Observable<Warehouse[]> {
    return this.httpClient.get<Warehouse[]>(`${this.baseUrl}/getAll`);
  }

  loadWarehouse(warehouseId: string): Observable<Warehouse> {
    return this.httpClient.get<Warehouse>(`${this.baseUrl}/load/${warehouseId}`);
  }

  saveWarehouse(warehouse: Warehouse): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/save`, warehouse);
  }

  deleteWarehouse(warehouse: Warehouse): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${warehouse.id}`);
  }
}
