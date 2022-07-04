package ir.hinceid.warehouse.model.warhouse;

import com.sun.istack.NotNull;
import ir.hinceid.warehouse.model.general.BaseModel;
import ir.hinceid.warehouse.model.references.BaseInformation;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "ware")
public class Ware extends BaseModel {

    @NotNull
    @Column(name = "name")
    public String name;

    @ManyToOne
    @JoinColumn(name = "ware_type_id")
    public BaseInformation wareType;

    @ManyToOne
    @JoinColumn(name = "ware_unit_id")
    public BaseInformation wareUnit;

    @NotNull
    @Column(name = "status")
    public Boolean status;
}
