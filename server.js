const express = require('express');
const { Show } = require('./models');
const app = express();
const seed = require('./seed')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = 3000;

app.listen(3000, function() {
    console.log('Server is running on port ' + 3000);
})

seed()

//Test - no routers
app.get('/', (request, response) => {
    response.send('Successfull GET Request made!'); 
})

app.get("/users", (request, response) => {
    response.send("Successful GET request made to Users!")
})
app.get('/username', (request, response) => {
    response.send('Successful GET Request made to Username!')
})

app.get('/shows', async (request, response) => { //populates all shows 
    const shows = await Show.findAll()
    response.json({shows});
})

app.get('/users/:id', async (request, response) => {
    response.send("This is user #: " + request.params.id); //able to extract id
})

app.get('/shows/:id', async (request, response) => {
    const show = await Show.findByPk(request.params.id); //able to extract show by id 
    response.json({show}); 
})

//CRUD Operations on Shows
app.post('/shows', async (request, response) => {
    const addedShow = await Show.create(request.body);
    response.json(await Show.findAll()); 
})

app.put('/shows/:id', async (request, response) => {
    const updatedShow = await Show.update(request.body, {
        where: {
            id: request.params.id
        }
    })
    response.json(await Show.findByPk(request.params.id)); 
})

app.delete('/shows/:id', async (request, response) => {
    const deletedBook = await Show.destroy({
        where: {
            id: request.params.id
        }
    })
    response.json(await Show.findAll());
})