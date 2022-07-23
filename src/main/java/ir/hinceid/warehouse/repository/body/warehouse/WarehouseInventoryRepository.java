package ir.hinceid.warehouse.repository.body.warehouse;

import ir.hinceid.warehouse.model.warhouse.WarehouseInventory;
import ir.hinceid.warehouse.repository.interfaces.warehouse.IWarehouseInventoryRepository;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.function.Function;

@Repository
public class WarehouseInventoryRepository implements IWarehouseInventoryRepository { //extends BaseRepository<WarehouseInventory, UUID> implements IWarehouseInventoryRepository {

    @Override
    public List<WarehouseInventory> getByWarehouseId(UUID warehouseId) {
//        HashMap<String, Object> param = new HashMap<String, Object>();
//        param.put("warehouseId", warehouseId);
        String hql = " FROM " + ir.hinceid.warehouse.model.warhouse.WarehouseInventory.class.getName() + " e ";
//                     "      WHERE warehouse.id = :warehouseId                                                ";
        return findAll();
//        return getAllBy(hql);
    }

//    @Override
//    public List<WarehouseInventory> getAllBy(String hql) {
//        return null;
//    }

    @Override
    public List<WarehouseInventory> findAll() {
        return null;
    }

    @Override
    public List<WarehouseInventory> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<WarehouseInventory> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<WarehouseInventory> findAllById(Iterable<UUID> uuids) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(UUID uuid) {

    }

    @Override
    public void delete(WarehouseInventory entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends UUID> uuids) {

    }

    @Override
    public void deleteAll(Iterable<? extends WarehouseInventory> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends WarehouseInventory> S save(S entity) {
        return null;
    }

    @Override
    public <S extends WarehouseInventory> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<WarehouseInventory> findById(UUID uuid) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(UUID uuid) {
        return false;
    }

    @Override
    public void flush() {

    }

    @Override
    public <S extends WarehouseInventory> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends WarehouseInventory> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<WarehouseInventory> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<UUID> uuids) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public WarehouseInventory getOne(UUID uuid) {
        return null;
    }

    @Override
    public WarehouseInventory getById(UUID uuid) {
        return null;
    }

    @Override
    public WarehouseInventory getReferenceById(UUID uuid) {
        return null;
    }

    @Override
    public <S extends WarehouseInventory> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends WarehouseInventory> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends WarehouseInventory> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends WarehouseInventory> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends WarehouseInventory> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends WarehouseInventory> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends WarehouseInventory, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}
