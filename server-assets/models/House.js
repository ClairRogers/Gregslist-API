let mongoose = require('mongoose')
let Schema = mongoose.Schema

let house = new Schema({
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  levels: { type: Number },
  price: { type: Number, required: true },
  year: { type: Number, required: true, minlength: 4 },
  description: { type: String, required: true, default: 'No description provided' },
  imgUrl: { type: String, required: true, default: '//placehold.it/300x300' }
})

module.exports = mongoose.model('House', house)
