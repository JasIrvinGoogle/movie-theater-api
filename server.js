const express = require('express');
const app = express();
const {Sequelize} = require('./db');
const {User, Show} = require('./models/index')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = 3000;

app.listen(3000, function() {
    console.log('Server is running on port ' + 3000);
})

//Test - no routers
app.get('/', (request, response) => {
    response.send('Successfull GET Request made!'); 
})

app.get('/users', (request, response) => {
    response.send('Successfull GET Request made to users!'); 
})

app.get('/username', (request, response) => {
    response.send('Successful GET Request made to username!')
})

//Endpoint Testing
app.get('/shows', async (request, response) => { //not working
    const shows = await Show.findAll() 
    response.json({shows}); 
})

