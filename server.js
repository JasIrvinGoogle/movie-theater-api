const express = require('express');
const app = express();
const port = 3000;
const router = express.Router(); 

const usersRouter = require('/routes/userRouter')
const showsRouter = require('./routes/showRouter')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users', usersRouter)
app.use('/shows', showsRouter)

app.get('/', (request, response) => {
    response.send('Server is running!')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});