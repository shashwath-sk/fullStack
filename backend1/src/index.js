const express =  require('express');
const userRouter =require('./routes/userRoutes.js');
const productRouter = require('./routes/productRoutes');

const app = express();
const port = 5050;


app.use(express.json());
app.use('/user', userRouter);
app.use('/product', productRouter);


app.get('/', (req, res) => {
    res.send('We have a request at the root');
});

app.listen(port, () => {
    console.log(`The server is listening on port : ${port}`);
});