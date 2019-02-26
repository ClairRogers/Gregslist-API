let mongoose = require('mongoose')
let Schema = mongoose.Schema

let car = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true, minlength: 4 },
  price: { type: Number, required: true },
  description: { type: String, required: true, default: 'No description provided' }
})




module.exports = mongoose.model('Car', car)