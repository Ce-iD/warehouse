package ir.hinceid.warehouse.controller.reference;

import ir.hinceid.warehouse.controller.general.BaseController;
import ir.hinceid.warehouse.model.references.BaseInformation;
import ir.hinceid.warehouse.repository.interfaces.reference.IBaseInformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@RestController
@RequestMapping("/rest/baseInformation")
public class BaseInformationController extends BaseController {

    @Autowired
    private IBaseInformationRepository iBaseInformationRepository;

    // getAll
    @GetMapping("getAll")
    public List<BaseInformation> getAllBaseInformation() {
        return iBaseInformationRepository.findAll();
    }

    // load
    @GetMapping("load/{baseInformationId}")
    public Optional<BaseInformation> loadBaseInformation(@PathVariable String baseInformationId) {
        if (baseInformationId != "")
            return iBaseInformationRepository.findById(UUID.fromString(baseInformationId));
        return Optional.empty();
    }

    // save or update
    @PostMapping("save")
    public BaseInformation saveBaseInformation(@RequestBody BaseInformation baseInformation, String fieldName) {
//        List<BaseInformation> baseInformations = iBaseInformationRepository.loadByWareType();
        if (baseInformation.getId() == null)
            baseInformation.setId(UUID.randomUUID());
        baseInformation.setCreatedDate(new Date());
        return iBaseInformationRepository.save(baseInformation);
    }

}
