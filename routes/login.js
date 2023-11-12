import {Router} from 'express';
import userData from '../data/users.json' assert {type: 'json'};
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/', (req, res) => {
const secretKey = process.env.AUTH_SECRET_KEY || 'my-secret-kay';
const {username, password} = req.body;
const {users} = userData;
const user = users.find(
    (u) => u.username === username && u.password === password,
);

if (!user) {
    return res.status(401).json({message: 'Invalid credentials!'});
}

const token = jwt.sign({userId: user.id}, secretKey);
res.status(200).json({message: 'Sucessfully logged in!', token});
});

export default router;