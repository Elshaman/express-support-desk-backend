const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const listEndpoints = require('express-list-endpoints')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000 

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users' , require('./routes/userRoutes'))
app.use(errorHandler)
console.log(listEndpoints(app))
app.listen(PORT, ()=>console.log('Server started'))