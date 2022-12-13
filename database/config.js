const mongoose = require ("mongoose")
mongoose.set('strictQuery', true);

const dbConnection = async() => {
    try {
        
        await mongoose.connect(process.env.DB_REMOTE, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DB-Connected! ")

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    dbConnection
}