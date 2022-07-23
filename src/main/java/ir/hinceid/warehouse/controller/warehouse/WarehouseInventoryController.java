package ir.hinceid.warehouse.controller.warehouse;

import ir.hinceid.warehouse.controller.general.BaseController;
import ir.hinceid.warehouse.model.warhouse.Ware;
import ir.hinceid.warehouse.model.warhouse.Warehouse;
import ir.hinceid.warehouse.model.warhouse.WarehouseInventory;
import ir.hinceid.warehouse.repository.interfaces.warehouse.IWarehouseInventoryRepository;
import ir.hinceid.warehouse.viewModel.warehouse.WarehouseInventoryViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/rest/warehouseInventory")
public class WarehouseInventoryController extends BaseController {

        @Qualifier("IWarehouseInventoryRepository")
//    @Qualifier("warehouseInventoryRepository")
    @Autowired
    private IWarehouseInventoryRepository iWarehouseInventoryRepository;

    @Autowired
    private IWarehouseInventoryRepository warehouseInventoryRepository;

    // getAll
    @GetMapping("getAll")
    public List<WarehouseInventoryViewModel> getAllWarehouseInventory() {
        List<WarehouseInventory> warehouseInventories = iWarehouseInventoryRepository.findAll();
        List<WarehouseInventoryViewModel> warehouseInventoryViewModels = new ArrayList<WarehouseInventoryViewModel>();
        warehouseInventories.forEach(warehouseInventory -> {
            WarehouseInventoryViewModel warehouseInventoryViewModel = new WarehouseInventoryViewModel();
            warehouseInventoryViewModel.setId(warehouseInventory.getId().toString());
            warehouseInventoryViewModel.setCreatedDate(warehouseInventory.getCreatedDate().toString());
//            warehouseInventoryViewModel.setCreatedUser(warehouseInventory.getCreatedUser().toString());
            warehouseInventoryViewModel.setWarehouseId(warehouseInventory.getWarehouse().getId().toString());
            warehouseInventoryViewModel.setWarehouseTitle(warehouseInventory.getWarehouse().getName());
            warehouseInventoryViewModel.setWareId(warehouseInventory.getWare().getId().toString());
            warehouseInventoryViewModel.setWareName(warehouseInventory.getWare().getName());
            warehouseInventoryViewModel.setInventory(warehouseInventory.getInventory());
            warehouseInventoryViewModel.setExpirationDate(warehouseInventory.getExpirationDate());
            warehouseInventoryViewModel.setSerial(warehouseInventory.getSerial());
            warehouseInventoryViewModel.setContractNumber(warehouseInventory.getContractNumber());
            warehouseInventoryViewModels.add(warehouseInventoryViewModel);
        });
        return warehouseInventoryViewModels;
    }

    // getByWarehouseId
    @GetMapping("getByWarehouseId/{warehouseId}")
    public List<WarehouseInventoryViewModel> getByWarehouseId(@PathVariable String warehouseId) {
        List<WarehouseInventory> warehouseInventories = iWarehouseInventoryRepository.getByWarehouseId(UUID.fromString(warehouseId));
        List<WarehouseInventoryViewModel> warehouseInventoryViewModels = new ArrayList<WarehouseInventoryViewModel>();
        warehouseInventories.forEach(warehouseInventory -> {
            WarehouseInventoryViewModel warehouseInventoryViewModel = new WarehouseInventoryViewModel();
            warehouseInventoryViewModel.setId(warehouseInventory.getId().toString());
            warehouseInventoryViewModel.setCreatedDate(warehouseInventory.getCreatedDate().toString());
//            warehouseInventoryViewModel.setCreatedUser(warehouseInventory.getCreatedUser().toString());
            warehouseInventoryViewModel.setWarehouseId(warehouseInventory.getWarehouse().getId().toString());
            warehouseInventoryViewModel.setWarehouseTitle(warehouseInventory.getWarehouse().getName());
            warehouseInventoryViewModel.setWareId(warehouseInventory.getWare().getId().toString());
            warehouseInventoryViewModel.setWareName(warehouseInventory.getWare().getName());
            warehouseInventoryViewModel.setInventory(warehouseInventory.getInventory());
            warehouseInventoryViewModel.setExpirationDate(warehouseInventory.getExpirationDate());
            warehouseInventoryViewModel.setSerial(warehouseInventory.getSerial());
            warehouseInventoryViewModel.setContractNumber(warehouseInventory.getContractNumber());
            warehouseInventoryViewModels.add(warehouseInventoryViewModel);
        });
        return warehouseInventoryViewModels;
    }

    @GetMapping("load/{warehouseInventoryId}")
    public Optional<WarehouseInventoryViewModel> loadWarehouseInventory(@PathVariable String warehouseInventoryId) {
        if (warehouseInventoryId != "")
            return null;
        return Optional.empty();
    }

    @PostMapping("save")
    public WarehouseInventory saveWarehouseInventory(@RequestBody WarehouseInventoryViewModel warehouseInventoryViewModel) {
        WarehouseInventory warehouseInventory = new WarehouseInventory();
        if (warehouseInventoryViewModel.getId() == null || Objects.equals(warehouseInventory.getId(), ""))
            warehouseInventory.setId(UUID.randomUUID());
        Ware ware = new Ware();
        ware.setId(UUID.fromString(warehouseInventoryViewModel.getWareId()));
        warehouseInventory.setWare(ware);
        Warehouse warehouse = new Warehouse();
        warehouse.setId(UUID.fromString(warehouseInventoryViewModel.getWarehouseId()));
        warehouseInventory.setWarehouse(warehouse);
        if (warehouseInventoryViewModel.getInventory() != null)
            warehouseInventory.setInventory(warehouseInventoryViewModel.getInventory());
        if (warehouseInventoryViewModel.getExpirationDate() != null)
            warehouseInventory.setExpirationDate(warehouseInventoryViewModel.getExpirationDate());
        if (warehouseInventoryViewModel.getSerial() != null)
            warehouseInventory.setSerial(warehouseInventoryViewModel.getSerial());
        if (warehouseInventoryViewModel.getContractNumber() != null)
            warehouseInventory.setContractNumber(warehouseInventoryViewModel.getContractNumber());
        warehouseInventory.setCreatedDate(new Date());
        return iWarehouseInventoryRepository.save(warehouseInventory);
    }

    @DeleteMapping("delete/{warehouseInventoryId}")
    public void deleteWarehouseInventory(@PathVariable String warehouseInventoryId) {
        iWarehouseInventoryRepository.deleteById(UUID.fromString(warehouseInventoryId));
    }
}
