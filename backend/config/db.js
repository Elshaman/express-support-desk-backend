const mongoose = require('mongoose')

const m = 'mongodb+srv://entershaman:Genkidama8286@cluster0.rpxhk.mongodb.net/supportdesk?retryWrites=true&w=majority'

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(m,{
            useUnifiedTopology:true,
            useNewUrlParser: true
        })
        console.log(`Mongo DB conectado ${conn.connection.host}`)
    } catch (error) {
        console.log('error:',error)
        //process.exit(1)
    }
}

//connectDB()
module.exports = connectDB