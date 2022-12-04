const express=require ('express');
const dotenv= require("dotenv").config();
const connectDB = require('./config/connectDb');
const port=process.env.PORT ||5000

connectDB();

const cors=require('cors');
const app=express()
app.use(express.json());
app.use(cors())

const user =require('./routes/userRouter')
app.use('/api/users', user);
const product =require('./routes/productRouter')
app.use('/api/products',product );
const cart= require('./routes/cartRouter')
app.use('/api/products/carts',cart)



app.listen(port,(err)=>{
err?console.log(err):console.log(`server is run http://localhost:${port}`)
 })