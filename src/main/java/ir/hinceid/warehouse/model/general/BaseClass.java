package ir.hinceid.warehouse.model.general;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.util.Date;
import java.util.UUID;

@MappedSuperclass
@Getter @Setter
public class BaseClass {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "id", updatable = false, nullable = false, unique = true, length = 16)
    private UUID id;

//    @NotNull
    @Column(name = "created_date")
    private Date createdDate;

//    @NotNull
    @Column(name = "created_user", length = 16)
    private UUID CreatedUser;
}
