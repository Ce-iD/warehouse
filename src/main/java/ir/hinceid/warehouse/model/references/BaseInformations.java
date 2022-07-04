package ir.hinceid.warehouse.model.references;

import ir.hinceid.warehouse.model.general.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "baseinformations")
public class BaseInformations extends BaseModel {

    public String wareType;

    public UUID wareTypeParent;

    public String gender;

    public String wareUnit;

}
