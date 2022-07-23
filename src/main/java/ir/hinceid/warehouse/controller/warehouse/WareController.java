package ir.hinceid.warehouse.controller.warehouse;

import ir.hinceid.warehouse.controller.general.BaseController;
import ir.hinceid.warehouse.model.references.BaseInformation;
import ir.hinceid.warehouse.model.warhouse.Ware;
import ir.hinceid.warehouse.repository.interfaces.IWareRepository;
import ir.hinceid.warehouse.repository.interfaces.reference.IBaseInformationRepository;
import ir.hinceid.warehouse.viewModel.warehouse.WareViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/rest/ware")
public class WareController extends BaseController {

    @Autowired
    private IWareRepository iWareRepository;

    @Autowired
    private IBaseInformationRepository iBaseInformationRepository;

    // getAll
    @GetMapping("getAll")
    public List<WareViewModel> getAllWare() {
        List<Ware> wares = iWareRepository.findAll();
        List<WareViewModel> wareViewModels = new ArrayList<WareViewModel>();
        wares.forEach(ware -> {
            Optional<BaseInformation> baseInformationWareType = iBaseInformationRepository.findById(ware.getWareType().getId());
            Optional<BaseInformation> baseInformationWareUnit = iBaseInformationRepository.findById(ware.getWareUnit().getId());
            WareViewModel wareViewModel = new WareViewModel();
            wareViewModel.setTypeId(baseInformationWareType.get().getId().toString());
            wareViewModel.setTypeTitle(baseInformationWareType.get().getWareType());
            wareViewModel.setUnitId(baseInformationWareUnit.get().getId().toString());
            wareViewModel.setUnitTitle(baseInformationWareUnit.get().getWareUnit());
            wareViewModel.setName(ware.getName());
            wareViewModel.setStatus(ware.getStatus());
            wareViewModel.setId(ware.getId().toString());
            wareViewModels.add(wareViewModel);
        });
        return wareViewModels;
    }

    // load
    @GetMapping("load/{wareId}")
    public Optional<Ware> loadWare(@PathVariable String wareId) {
        if (wareId != "")
            return iWareRepository.findById(UUID.fromString(wareId));
        return Optional.empty();
    }

    //save
    @PostMapping("save")
    public Ware saveWare(@RequestBody WareViewModel wareViewModel) {
        Ware ware = new Ware();
        if (wareViewModel.getId() == null || Objects.equals(wareViewModel.getId(), ""))
            ware.setId(UUID.randomUUID());
        BaseInformation baseinformation = new BaseInformation();
        baseinformation.setId(UUID.fromString(wareViewModel.getTypeId()));
        ware.setWareType(baseinformation);
        baseinformation = null;
        baseinformation = new BaseInformation();
        baseinformation.setId(UUID.fromString(wareViewModel.getUnitId()));
        ware.setWareUnit(baseinformation);
        if (wareViewModel.getStatus() != null)
            ware.setStatus(wareViewModel.getStatus());
        if (wareViewModel.getName() != null)
            ware.setName(wareViewModel.getName());
        ware.setCreatedDate(new Date());
        return iWareRepository.save(ware);
    }

    // delete
    @DeleteMapping("delete/{wareId}")
    public void deleteWare(@PathVariable String wareId) {
        iWareRepository.deleteById(UUID.fromString(wareId));
    }
}
