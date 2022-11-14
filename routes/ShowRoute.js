const express = require('express')
const app = express()
const Show = require('../../scooter-project/src/Show')
const router = express.Router()

app.get('/shows', async (request, response) => {
    const shows = await Show.findAll(); 
    response.json(shows);
})

