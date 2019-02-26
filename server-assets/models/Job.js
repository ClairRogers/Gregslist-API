let mongoose = require('mongoose')
let Schema = mongoose.Schema

let job = new Schema({
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
  hours: { type: Number, required: true },
  rate: { type: Number, required: true },
  description: { type: String, required: true, default: 'No description provided' }
})

module.exports = mongoose.model('Job', job)