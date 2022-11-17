const express = require('express');
const app = express();
const port = 3000;
const router = express.Router(); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const showRouter = require('./routes/ShowRoute')
const userRouter = require('./routes/UserRoute')

//app.use('/users', userRouter);
//app.use('/shows', showRouter);

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});