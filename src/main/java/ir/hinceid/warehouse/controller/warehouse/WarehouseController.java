package ir.hinceid.warehouse.controller.warehouse;

import ir.hinceid.warehouse.controller.general.BaseController;
import ir.hinceid.warehouse.model.warhouse.Warehouse;
import ir.hinceid.warehouse.repository.interfaces.IWarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@RestController
@RequestMapping("/rest/warehouse/")
public class WarehouseController extends BaseController {

    @Autowired
    private IWarehouseRepository iWarehouseRepository;

    // getAll
    @GetMapping("getAll")
    public List<Warehouse> getAllWarehouses() {
        return iWarehouseRepository.findAll();
    }

    //load
    @GetMapping("load/{warehouseId}")
    public Optional<Warehouse> loadWarehouse(@PathVariable String warehouseId) {
        return iWarehouseRepository.findById(UUID.fromString(warehouseId));
    }

    // save or update
    @PostMapping("save")
    public Warehouse saveWarehouse(@RequestBody Warehouse warehouse) {
        if (warehouse.getId() == null)
            warehouse.setId(UUID.randomUUID());
        warehouse.setCreatedDate(new Date());
        return iWarehouseRepository.save(warehouse);
    }


    // delete
    @DeleteMapping("delete/{warehouseId}")
    public void deletePerson(@PathVariable String warehouseId) {
        iWarehouseRepository.deleteById(UUID.fromString(warehouseId));
    }
}
