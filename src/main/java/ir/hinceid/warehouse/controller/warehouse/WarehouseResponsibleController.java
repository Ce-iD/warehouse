package ir.hinceid.warehouse.controller.warehouse;

import ir.hinceid.warehouse.controller.general.BaseController;
import ir.hinceid.warehouse.model.general.Person;
import ir.hinceid.warehouse.model.warhouse.Warehouse;
import ir.hinceid.warehouse.model.warhouse.WarehouseResponsible;
import ir.hinceid.warehouse.repository.interfaces.IPersonRepository;
import ir.hinceid.warehouse.repository.interfaces.IWarehouseRepository;
import ir.hinceid.warehouse.repository.interfaces.IWarehouseResponsibleRepository;
import ir.hinceid.warehouse.viewModel.warehouse.WarehouseResponsibleViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/rest/warehouseResponsible")
public class WarehouseResponsibleController extends BaseController {

    @Autowired
    private IWarehouseResponsibleRepository iWarehouseResponsibleRepository;

    @Autowired
    private IPersonRepository iPersonRepository;

    @Autowired
    private IWarehouseRepository iWarehouseRepository;

    // getAll
    @GetMapping("getAll")
    public List<WarehouseResponsibleViewModel> getAllWarehouseResponsible() {
        List<WarehouseResponsible> warehouseResponsibles = iWarehouseResponsibleRepository.findAll();
        List<WarehouseResponsibleViewModel> warehouseResponsibleViewModels = new ArrayList<WarehouseResponsibleViewModel>();
        warehouseResponsibles.forEach(warehouseResponsible -> {
            WarehouseResponsibleViewModel warehouseResponsibleViewModel = new WarehouseResponsibleViewModel();
            Optional<Warehouse> warehouse = iWarehouseRepository.findById(warehouseResponsible.getWarehouse().getId());
            Optional<Person> person = iPersonRepository.findById(warehouseResponsible.getResponsible().getId());
            warehouseResponsibleViewModel.setWarehouseId(warehouse.get().getId().toString());
            warehouseResponsibleViewModel.setWarehouseTitle(warehouse.get().getName());
            warehouseResponsibleViewModel.setResponsibleId(person.get().getId().toString());
            warehouseResponsibleViewModel.setResponsibleName(person.get().getFirstName() + " " + person.get().getLastName());
            warehouseResponsibleViewModel.setId(warehouseResponsible.getId().toString());
            warehouseResponsibleViewModel.setStatus(warehouseResponsible.getStatus());
            warehouseResponsibleViewModel.setStartDate(warehouseResponsible.getStartDate());
            warehouseResponsibleViewModel.setEndDate(warehouseResponsible.getEndDate());
            warehouseResponsibleViewModels.add(warehouseResponsibleViewModel);
        });
        return warehouseResponsibleViewModels;
    }

    // load
    @GetMapping("load/{warehouseResponsibleId}")
    public Optional<WarehouseResponsible> loadWarehouseResponsible(@PathVariable String warehouseResponsibleId) {
        if (warehouseResponsibleId != "")
            return iWarehouseResponsibleRepository.findById(UUID.fromString(warehouseResponsibleId));
        return Optional.empty();
    }

    // save or update
    @PostMapping("save")
    public WarehouseResponsible saveWarehouseResponsible(@RequestBody WarehouseResponsibleViewModel warehouseResponsibleViewModel) {
        WarehouseResponsible warehouseResponsible = new WarehouseResponsible();
        if (warehouseResponsibleViewModel.getId() == null || Objects.equals(warehouseResponsibleViewModel.getId(), ""))
            warehouseResponsible.setId(UUID.randomUUID());
        Person person = new Person();
        Warehouse warehouse = new Warehouse();
        person.setId(UUID.fromString(warehouseResponsibleViewModel.getResponsibleId()));
        warehouse.setId(UUID.fromString(warehouseResponsibleViewModel.getWarehouseId()));
        warehouseResponsible.setResponsible(person);
        warehouseResponsible.setWarehouse(warehouse);
        warehouseResponsible.setStartDate(warehouseResponsibleViewModel.getStartDate());
        warehouseResponsible.setEndDate(warehouseResponsibleViewModel.getEndDate());
        warehouseResponsible.setStatus(warehouseResponsibleViewModel.getStatus());
        warehouseResponsible.setCreatedDate(new Date());
        return iWarehouseResponsibleRepository.save(warehouseResponsible);
    }

    // delete
    @DeleteMapping("delete/{warehouseResponsibleId}")
    public void deleteWarehouseResponsible(@PathVariable String warehouseResponsibleId) {
        iWarehouseResponsibleRepository.deleteById(UUID.fromString(warehouseResponsibleId));
    }
}
