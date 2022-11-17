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
    const show = await Shows.findByPk(request.params.id);
    response.json(show);
})

//get all shows of a particular genre
router.get('/genre/:genre', async (request, response) => {
    const genre = await Show.findAll()
    response.json(genre); 
})

//update a show
router.put('/shows/:id', async (request, response) => {
    await Show.update(request.body, {
        where: {
            id: request.params.id
        }
    })
    response.json(await Show.findAll());
})

//delete a show
router.delete('/shows/:id', async (request, response) => {
    const deleteShow = await Show.destroy({
        where: {
            id: request.params.id
        }
    })
    response.json(await Show.findAll()); 
})

