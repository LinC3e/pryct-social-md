const passport = require("passport")
const { Strategy } = require("passport-local")
const Auth = require("../models/user")

passport.use(
    new Strategy({
        usernameField: 'email'
    }, async ( email , password , done ) => {
        const user = await Auth.findOne({ email })

        if(!user) {
            return done(null, false ,{ message : '<<< User not found >>>'})
        }
        return done(null, user)
    })
)

passport.serializeUser(( user, done ) => {
    done(null, user.id)
})

passport.deserializeUser(( id , done ) => {
    Auth.find(id, ( err, user ) => {
        done(err, user)
    })
})