const User = require('../models/user')

const getAllUsers = async (req,res) => {
    let users;
    try {
        users = await User.find()
    } catch (error) {
        console.log(error)
    }

    if(!users) { 
        return res.send(404).json({  message: "No Users Found" })
    }
    return res.status(200).json({ users })
}

module.exports = {
    getAllUsers
}