const env = require('dotenv')
const express = require('express')
const userRoute = require('./routes/UserRoute')
const app = express()
const { default: mongoose } = require('mongoose')
env.config({path:"./.env"})

app.use(express.json())
app.use("/user", userRoute)

mongoose.connect(process.env.MONGO_DB_URL)

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log("APP RUNNING AT PORT")
})


