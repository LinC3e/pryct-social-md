const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true , unique: true},
    password: { type: String , required: true },
    avatar: { type: String },
},  { 
    timestamps: true , 
    versionKey: false
    })

UserSchema.methods.passwordEncrypt = async (password) => {
    const salt = await bcrypt.genSalt(10) // Semmilla para luego encryptar
    return await bcrypt.hash(password, salt)
}

UserSchema.methods.checkPassword = async function ( password ) { // true o false
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)