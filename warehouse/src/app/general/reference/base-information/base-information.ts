import {BaseModel} from "../../model/base-model";

export class BaseInformation extends BaseModel {
  constructor(
    public gender?: string,
    public wareType?: string,
    public wareUnit?: string,
  ) {
    super();
  }
}
