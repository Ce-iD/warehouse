package ir.hinceid.warehouse.viewModel.warehouse;

import ir.hinceid.warehouse.viewModel.general.BaseViewModel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WareViewModel extends BaseViewModel {
    public String name;
    public String typeId;
    public String typeTitle;
    public String unitId;
    public String unitTitle;
    public Boolean status;
}
