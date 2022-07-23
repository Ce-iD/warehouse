package ir.hinceid.warehouse.model.warhouse;

//import com.sun.istack.NotNull;
import ir.hinceid.warehouse.model.general.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name = "warehouseInventory")
public class WarehouseInventory extends BaseModel {

//    @NotNull
    @ManyToOne
    @JoinColumn(name = "ware_id")
    public Ware ware;

//    @NotNull
    @ManyToOne
    @JoinColumn(name = "warehouse_id")
    public Warehouse warehouse;

    public Integer inventory;

    public String expirationDate;

    public String serial;

    public String contractNumber;
}
