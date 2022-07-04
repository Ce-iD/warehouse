package ir.hinceid.warehouse.repository.body.general;

import org.springframework.stereotype.Repository;

@Repository
public abstract class BaseRepository { //<T extends BaseModel, PK extends Serializable> implements IBaseRepository<T, PK> {
}
