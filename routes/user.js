const express = require("express")
const { getAllUsers } = require("../controllers/user")
const routerUser = express.Router()

// Routes User 

routerUser.get('/users', getAllUsers)

module.exports = {
    routerUser
}