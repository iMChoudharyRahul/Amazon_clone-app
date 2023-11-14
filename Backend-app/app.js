const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRouter = require('./router/product');
const colors = require('colors');
const cors = require('cors');
//Connect Mongodb
require('./db/ConnectDb');

app.use(bodyParser.json());
app.use(cors());
app.use('/product', productRouter);
app.get('/', (req,resp)=>{
    resp.send('<h2> Server is started <h2>');
})
app.listen(4000);