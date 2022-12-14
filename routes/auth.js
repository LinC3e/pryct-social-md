const express = require("express")
const { registerForm, register, loginForm, login, logout } = require("../controllers/auth")
const routerAuth = express.Router()

// Routher Auth 

routerAuth.get('/register',  registerForm)
routerAuth.post('/register', register )
routerAuth.get('/login', loginForm)
routerAuth.post('/login', login)
routerAuth.get('/logout', logout)

module.exports = {
    routerAuth
}