const express = require("express");
const blogroute = express()
const {createBlog, singleblog} = require('../controller/blogcontroller')

blogroute.post("/create", createBlog)
blogroute.get("/single", singleblog)
module.exports = blogroute