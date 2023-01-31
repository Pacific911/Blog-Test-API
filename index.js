const express = require('express');
const mongoose = require("mongoose");
const database = require('./database/database');
const blogroute = require("./routes/blogs");
const app = express() 
app.use(express.json())
app.use(blogroute)


database()

app.listen(5000, () => {
    console.log("Server has started!")
})
