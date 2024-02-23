import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = []

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const userId = uuidv4();
    console.log(req.body);
    let body = req.body;
    body = {...body, id: userId};
    console.log(body);
    users.push(body);
    res.send("User added successfully");
});

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    const user = users.filter((user) => user.id === req.params.id);
    res.send(user);
});

router.delete('/:id', (req, res) => {
    users = users.filter((user) => user.id!==req.params.id);
    res.send("User deleted succfully!!!");
});

router.patch('/:id', (req, res) => {
    const user = users.map((user) => {
        if(user.id===req.params.id){
            const body = req.body;
            for(const key in body){
                user[key] = body[key];
            }
            return user;
        }
    })
    res.send(`User updated successfully - ${user}`);
});

export default router;