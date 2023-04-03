const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose  = require("mongoose");
const helmet = require("helmet");

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

// use middleware

app.use(express.json());
app.use(helmet());
app.use(morgan('common'))

app.get('/', (req, res)=>{
    res.send("this is home page")
})

app.listen(3000, ()=>{
    console.log('backend server started')
})