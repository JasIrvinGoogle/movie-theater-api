const express = require('express');
const app = express();
const User = require('../models/User');
const router = express.Router();

//add a user to the db
router.post('/users', async (request, response) => {
    const userToAdd = await User.create(request.body);
    response.json(await Show.findAll()); 
})

//get all users from user DB
router.get('/users', async (request, response) => {
   const users = await User.findAll(); 
   response.json(users)
})

//get a specific user from user DB
router.get('/users/:id', async (request, response) => {
    const user = await User.findByPk(request.params.id);
    response.json(user);
})

//get all shows watched by a user(user id in req.params)

//put update and add a show if user has watched it

//update user in db
router.put('/users/:id', async (request, response) => {
    await User.update(request.body, {
        where: {
            id: request.params.id
        }
    })
    response.json(await User.findAll());
})

//delete a user from db
router.delete('/users/:id', async (request, response) => {
    const deleteUser = await User.destroy({
        where: {
            id: request.params.id
        }
    })
    response.json(await User.findAll()); 
})

module.exports = router; 