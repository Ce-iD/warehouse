package ir.hinceid.warehouse.controller;

import ir.hinceid.warehouse.model.warhouse.Warehouse;
import ir.hinceid.warehouse.repository.interfaces.IWarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.UUID;


@CrossOrigin
@RestController
@RequestMapping("/rest/warehouse/")
public class WarehouseController {

    @Autowired
    private IWarehouseRepository iWarehouseRepository;

    // getAll
    @GetMapping("getAll")
    public List<Warehouse> getAllWarehouses() {
        return iWarehouseRepository.findAll();
    }

    // save or update
    @PostMapping("save")
    public Warehouse saveWarehouse(@RequestBody Warehouse warehouse) {
        warehouse.setId(UUID.randomUUID());
        warehouse.setCreatedDate(new Date());
        return iWarehouseRepository.save(warehouse);
    }
}
