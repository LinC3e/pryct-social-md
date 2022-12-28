const express = require("express")
const { registerForm, register, loginForm, login, logout } = require("../controllers/auth")
const routerAuth = express.Router()

// Routher Auth 

routerAuth.get('/auth/register',  registerForm)
routerAuth.post('/auth/register', register )
routerAuth.get('/auth/login', loginForm)
routerAuth.post('/auth/login', login)
routerAuth.get('/auth/logout', logout)

module.exports = {
    routerAuth
}