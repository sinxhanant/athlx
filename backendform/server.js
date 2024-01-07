const express = require('express')
const app = express()
const mongoose =require('mongoose')
const cors = require('cors')
const dotenv= require('dotenv')
const routesUrls=require('./routes/routes')

dotenv.config()



mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Database Connected"))

app.use(cors())
app.use(express.json())
app.use('/app', routesUrls)

app.listen(4000,()=>console.log("Server is up and running"))
