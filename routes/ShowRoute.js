const express = require('express')
const app = express()
const Show = require('../models/Show')
const router = express.Router()

//get all shows
router.get('/shows', async (request, response) => {
    const shows = await Show.findAll(); 
    response.json(shows);
})

//get one show
router.get('/shows/:id', async (request, response) => {
    const show = await Shows.findByPk(req.params.id);
    response.json(show);
})

