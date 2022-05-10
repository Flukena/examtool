const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    email: String,
    password: String,
    tags: [String]
},{ collection: 'users' })
const usersModel = mongoose.model('users', usersSchema)

module.exports = usersModel;