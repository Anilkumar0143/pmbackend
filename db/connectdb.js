const mongoose = require('mongoose');
const url = "mongodb+srv://admin:Anil143@cluster0.ml9zk.mongodb.net/projects";
let connectdb = async() => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to mongodb ...')
}
const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:')
})
db.on('error', err => {
    console.error('connection error:', err)
})

module.exports = connectdb;