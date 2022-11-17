const express = require('express');
const app = express();
const port = 3000;
const router = express.Router(); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const showRouter = require('./routes/ShowRoute')
const userRouter = require('./routes/UserRoute')

router.use('/users', userRouter);
router.use('/shows', showRouter);

app.use(express.static('public'));

app.get('/', async (request, response) => {
    response.send('Server is running!')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});