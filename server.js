const express = require('express');
const app = express();
const port = 3000;

const showRouter = require('./routes/ShowRoute')
const userRouter = require('./routes/UserRoute')

app.use('/user', userRouter);
app.use('/show', showRouter);

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});