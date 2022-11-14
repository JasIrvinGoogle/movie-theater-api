const express = require('express')
const app = express()
const User = require('../models/User')
const router = express.Router()

app.get('/users', async (request, response) => {
    const users = await User.findAll(); 
    response.json(users);
})

app.get('/users/:id', async (request, response) => {
    const user = await User.findByPk(request.params.id);
    response.json(user);
})