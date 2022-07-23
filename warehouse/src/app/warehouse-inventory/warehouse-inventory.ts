import {BaseModel} from "../general/model/base-model";

export class WarehouseInventory extends BaseModel {
  constructor(
    public wareId?: string,
    public wareName?: string,
    public warehouseId?: string,
    public warehouseTitle?: string,
    public inventory?: number,
    public expirationDate?: string,
    public serial?: string,
    public contractNumber?: string
  ) {
    super();
  }
}
