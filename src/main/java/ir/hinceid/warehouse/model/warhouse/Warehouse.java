package ir.hinceid.warehouse.model.warhouse;

import ir.hinceid.warehouse.model.general.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name = "warehouse")

public class Warehouse extends BaseModel {

    @Column(name = "name")
    public String name;

    @Column(name = "capacity")
    public Integer capacity;

    @Column(name = "status")
    public Boolean status;

//    @Column(name = "location")
}
