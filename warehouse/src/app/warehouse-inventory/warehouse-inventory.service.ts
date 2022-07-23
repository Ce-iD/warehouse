import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {WarehouseInventory} from './warehouse-inventory';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WarehouseInventoryService {

  baseUrl: string = 'http://localhost:8080/rest/warehouseInventory';

  constructor(private httpClient: HttpClient) {
  }

  getAllWarehouseInventory(): Observable<WarehouseInventory[]> {
    return this.httpClient.get<WarehouseInventory[]>(`${this.baseUrl}/getAll`);
  }

  getByWarehouseId(warehouseId: string): Observable<WarehouseInventory[]> {
    return this.httpClient.get<WarehouseInventory[]>(`${this.baseUrl}/getByWarehouseId/${warehouseId}`);
  }

  loadWarehouseInventory(warehouseInventoryId: string): Observable<WarehouseInventory[]> {
    return this.httpClient.get<WarehouseInventory[]>(`${this.baseUrl}/load/${warehouseInventoryId}`);
  }

  saveWarehouseInventory(warehouseInventory: WarehouseInventory): Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseUrl}/save`, warehouseInventory)
  }

  deleteWarehouseInventory(warehouseInventory: WarehouseInventory): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${warehouseInventory.id}`);
  }

}
