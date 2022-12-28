const express = require("express")
const app = express()
const { engine } = require("express-handlebars")
const session = require('express-session')
const methodOverride = require('method-override')
const MongoStore = require('connect-mongo')
const passport = require('passport')
require('dotenv').config()
require('./config/passport')

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
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: process.env.DB_REMOTE})
}))
app.use(passport.initialize())
app.use(passport.session())


// Routes
app.use('/', routerUser)
app.use('/', routerAuth)

app.listen(PORT, (err) => {
    if(err) throw new Error ("Server off",err)
    console.log('Server on in PORT / ' , PORT)
})