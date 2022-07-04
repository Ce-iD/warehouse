package ir.hinceid.warehouse.repository.interfaces;

import ir.hinceid.warehouse.model.warhouse.WarehouseResponsible;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface IWarehouseResponsibleRepository extends JpaRepository<WarehouseResponsible, UUID> {
}
