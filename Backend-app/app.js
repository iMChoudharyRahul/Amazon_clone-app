const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRouter = require('./router/product');
const colors = require('colors');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());
app.use('/product', productRouter);
app.get('/', (req,resp)=>{
    resp.send('<h2> Server is started <h2>');
})


mongoose.connect('mongodb+srv://Rahul8055:8aqBObQxld1Qn6oM@cluster0.gvwwy8q.mongodb.net/amazon?retryWrites=true&w=majority').then(()=>{
        console.log(colors.yellow('MongoDB connected...'))
    }).catch((err)=>console.log(`No connection`));
app.listen(4000);