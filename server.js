const express = require("express")
const app = express()
const { engine } = require("express-handlebars")
require('dotenv').config()

const { dbConnection } = require("./database/config")
const { routerAuth } = require("./routes/auth")
const { routerUser } = require("./routes/user")

const PORT = process.env.PORT

// Connect to DB
dbConnection()

// Template Engine 
app.engine('hbs', engine({ extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './views')

// Middlewares
app.use(express.static('public'))

// Routes
app.use('/', routerUser)
app.use('/', routerAuth)

app.listen(PORT, (err) => {
    if(err) throw new Error ("Server off",err)
    console.log('Server on in PORT / ' , PORT)
})