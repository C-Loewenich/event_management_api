import userData from '../../data/users.json' assert {type: "json"};
import ResourceNotFoundError from '../../errors/notFoundError.js';

const getUserById = (id) => {
    const user = userData.users.find((user) => user.id == id);
    
    if (!user) {
        throw new ResourceNotFoundError('User', id)
    }

    return user
}

export default getUserById;
