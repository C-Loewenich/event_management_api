import userData from '../../data/users.json' assert {type: "json"};
import ResourceNotFoundError from '../../errors/notFoundError.js';

const deleteUser = (id) => {
    const index = userData.users.findIndex((user) => user.id == id);
    if (index === -1) {
        throw new ResourceNotFoundError('User', id)
    }
    userData.users.splice(index, 1);
    return id;
}

export default deleteUser