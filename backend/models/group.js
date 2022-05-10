const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
  name:  String,
  round: [{type: string}] ,
  

  tags: [String]
},{ collection: 'group' })

const ProductModel = mongoose.model('Group', productSchema)

module.exports = ProductModel
