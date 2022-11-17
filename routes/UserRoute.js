const express = require('express')
const app = express()
const User = require('../models/User')
const router = express.Router()

//get all users from user DB
router.get('/users', async (request, response) => {
    const users = await User.findAll(); 
    response.json(users);
})

//get a specific user from user DB
router.get('/users/:id', async (request, response) => {
    const user = await User.findByPk(request.params.id);
    response.json(user);
})

//get all shows watched by a user(user id in req.params)


//put update and add a show if user has watched it