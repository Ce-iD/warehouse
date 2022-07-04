import {BaseModel} from "../general/model/base-model";

export class Ware extends BaseModel {
  constructor(
    public name?: string,
    public typeId?: string,
    public typeTitle?: string,
    public unitId?: string,
    public unitTitle?: string,
    public status?: boolean,
  ) {
    super();
  }

}
