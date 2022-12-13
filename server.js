const express = require("express")
const app = express()
require('dotenv').config()

const { dbConnection } = require("./database/config")
const { routerUser } = require("./routes/user")

// Connect to DB
dbConnection()

const PORT = process.env.PORT

// Routes
app.use('/', routerUser)

app.listen(PORT, (err) => {
    if(err) throw new Error ("Server off",err)
    console.log('Server on in PORT / ' , PORT)
})