const express = require('express')

const env = require('dotenv').config()

const port = process.env.port || 5000

const helmet = require('helmet')

const { errorHandler } = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')

const mongoSanitize = require('express-mongo-sanitize')

connectDB()

const app = express()

app.use(helmet())

app.use(helmet.hidePoweredBy())

app.use(mongoSanitize())

app.use(express.json())

app.use(express.urlencoded({ extended : false }))

app.use('/api/todo' , require('./routes/todoRoutes'))

app.use( errorHandler )

app.listen( port , () => 

{

console.log(`Server Started Successfully On Port ${port}`)

}

)