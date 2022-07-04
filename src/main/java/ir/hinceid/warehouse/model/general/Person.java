package ir.hinceid.warehouse.model.general;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name = Person.tableName)
public class Person extends BaseModel {

    public static final String tableName = "person";

    @NotNull
    @Column(name = "first_name")
    public String firstName;

    @NotNull
    @Column(name = "last_name")
    public String lastName;

    @NotNull
    @Column(name = "user_name")
    public String userName;

    @NotNull
    @Column(name = "password")
    public String password;

    @NotNull
    @Column(name = "status")
    public Boolean status;

    @Column(name = "gender")
    public Integer gender;
}
