package ir.hinceid.warehouse.repository.interfaces.reference;

import ir.hinceid.warehouse.model.references.BaseInformation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

//public interface IBaseInformationRepository extends IBaseRepository<BaseInformation, UUID> {

public interface IBaseInformationRepository extends JpaRepository<BaseInformation, UUID> {
}
