const express = require('express')
const app = express()
const User = require('../../scooter-project/src/User')
const router = express.Router()

app.get('/users', async (request, response) => {
    const users = await User.findAll(); 
    response.json(users);
})