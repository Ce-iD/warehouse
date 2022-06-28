package ir.hinceid.warehouse.controller.warehouse;

import ir.hinceid.warehouse.model.warhouse.Ware;
import ir.hinceid.warehouse.repository.interfaces.IWareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/rest/ware")
public class WareController {

    @Autowired
    private IWareRepository iWarehouseRepository;

    // getAll
    @GetMapping("getAll")
    public List<Ware> getAllWare() {
        return iWarehouseRepository.findAll();
    }

    //save
    @PostMapping("save")
    public Ware saveWare(Ware ware) {
//    public Ware saveWare(@RequestBody Ware ware) {
        ware.setId(UUID.randomUUID());
        ware.setCreatedDate(new Date());
        return iWarehouseRepository.save(ware);
    }
}
