import userData from '../../data/users.json' assert {type: "json"};
import { v4 as uuid } from 'uuid'

const createUser = (username, password, fullName, image) => {
    const newUser = {
        id: uuid(),
        username,
        password,
        fullName,
        image
    };

    userData.users.push(newUser);
    return newUser
}

export default createUser;