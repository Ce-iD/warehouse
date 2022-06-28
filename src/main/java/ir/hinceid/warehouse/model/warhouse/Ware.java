package ir.hinceid.warehouse.model.warhouse;

import com.sun.istack.NotNull;
import ir.hinceid.warehouse.model.general.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name = "ware")
public class Ware extends BaseModel {

    @NotNull
    @Column(name = "name")
    public String name;

    @NotNull
    @Column(name = "serial")
    public String serial;

    @NotNull
    @Column(name = "contract_number")
    public String contractNumber;

    @NotNull
    @Column(name = "expiration_date")
    public String expirationDate;

    @NotNull
    @Column(name = "status")
    public Boolean status;
}
