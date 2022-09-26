const express= require('express');
const mongoose=require('mongoose');
const cors=require('cors')

const router=require("./routes/book-routes");
const app=express();

app.use(express.json());
app.use(cors());
app.use("/books",router);


mongoose.connect("mongodb+srv://admin:amanpr33t@cluster0.csgzc.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>{console.log('connected to db')})
.then(()=>{app.listen(5000)})
.catch((err)=>console.error(err))