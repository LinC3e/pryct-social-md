const passport = require("passport")
const Auth = require("../models/user")

// Register Form 
const registerForm = (req,res) => {
    res.render('auth/register')
}

const register = async (req,res) => {
    let errors = [] 
    
    const { name , email, password , confirm_password } = req.body

    if(password != confirm_password) { 
        errors.push({ msg: 'Password not equals... Please, try it agait.'})
    }
    if(password.length <= 4) {
        errors.push({ msg: 'Password must be more than 4 characters.Try it again'})
    }
    if(errors.length > 0) {
        return res.render('auth/register', {
            errors,
            name,
            email
        })
    }

    const userFound = await Auth.findOne({ email })

    if(userFound){
        req.flash('todo_error', 'The email is already registered')
        return res.redirect('/auth/register')
    }

    const newUser = Auth({ name, email, password })

    newUser.password = await newUser.passwordEncrypt(password)
    await newUser.save()
    req.flash('todo_OK', 'Register successfully')
    res.redirect('/auth/login')
}

const loginForm = (req,res) => {
    res.render('auth/login')
}

const login = passport.authenticate('local' , {
    successRedirect: "/home",
    failureRedirect: "/auth/login"
})

const logout = async (req,res, next) => {
    
    await req.logout((err) => {
        if(err) return next()
        res.redirect('/auth/login')
    })

}


module.exports = {
    registerForm,
    register,
    loginForm,
    login,
    logout
}
