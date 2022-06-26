package ir.hinceid.warehouse.controller.warehouse;

import ir.hinceid.warehouse.controller.general.BaseController;
import ir.hinceid.warehouse.model.general.Person;
import ir.hinceid.warehouse.repository.interfaces.IPersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@RestController
@RequestMapping("/rest/person")
public class PersonController extends BaseController {

    @Autowired
    private IPersonRepository iPersonRepository;

    // getAll
    @GetMapping("getAll")
    public List<Person> getAllPerson() {
        return iPersonRepository.findAll();
    }

    // load
    @GetMapping("load/{personId}")
    public Optional<Person> loadPerson(@PathVariable String personId) {
        return iPersonRepository.findById(UUID.fromString(personId));
    }

    // save or update
    @PostMapping("save")
    public Person savePerson(@RequestBody Person person) {
        person.setId(UUID.randomUUID());
        person.setCreatedDate(new Date());
        return iPersonRepository.save(person);
    }
}
