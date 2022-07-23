package ir.hinceid.warehouse.viewModel.warehouse;

import ir.hinceid.warehouse.viewModel.general.BaseViewModel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WarehouseInventoryViewModel extends BaseViewModel {
    public String wareId;
    public String wareName;
    public String warehouseId;
    public String warehouseTitle;
    public Integer inventory;
    public String expirationDate;
    public String serial;
    public String contractNumber;
}
