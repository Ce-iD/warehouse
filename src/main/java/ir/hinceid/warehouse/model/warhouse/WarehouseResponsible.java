package ir.hinceid.warehouse.model.warhouse;

import com.sun.istack.NotNull;
import ir.hinceid.warehouse.model.general.BaseModel;
import ir.hinceid.warehouse.model.general.Person;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name = "warehouse_responsible")
public class WarehouseResponsible extends BaseModel {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "warehouse_id")
    public Warehouse warehouse;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "person_id")
    public Person responsible;

    @NotNull
    public String startDate;

    @NotNull
    public String endDate;

    @NotNull
    public Boolean status;
}
