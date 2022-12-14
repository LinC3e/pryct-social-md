const passport = require("passport")
const Auth = require("../models/user")

// Register Form 
const registerForm = (req,res) => {
    res.render('register')
}

const register = async (req,res) => {
    
}

const loginForm = (req,res) => {
    res.render('login')
}

const login = async (req,res) => {

}

const logout = (req,res) => {
    res.send('Logout')
}


module.exports = {
    registerForm,
    register,
    loginForm,
    login,
    logout
}
