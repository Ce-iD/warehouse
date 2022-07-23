package ir.hinceid.warehouse.repository.interfaces.warehouse;

import ir.hinceid.warehouse.model.warhouse.WarehouseInventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface IWarehouseInventoryRepository extends JpaRepository<WarehouseInventory, UUID> { //extends IBaseRepository<WarehouseInventory, UUID> {

    List<WarehouseInventory> getByWarehouseId(UUID warehouseId);

//    List<WarehouseInventory> getAllBy(String hql);
}
