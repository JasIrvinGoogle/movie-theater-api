const express = require('express')
const app = express()
const Show = require('../models/Show')
const router = express.Router()

//get all shows
app.get('/shows', async (request, response) => {
    const shows = await Show.findAll(); 
    response.json(shows);
})

//get one show
