package ir.hinceid.warehouse.viewModel.warehouse;

import ir.hinceid.warehouse.viewModel.general.BaseViewModel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WarehouseResponsibleViewModel extends BaseViewModel {
    public String warehouseId;
    public String warehouseTitle;
    public String responsibleId;
    public String responsibleName;
    public String startDate;
    public String endDate;
    public Boolean status;
}
