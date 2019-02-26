let mongoose = require('mongoose')

const connectionString = 'mongodb://clairgregslist:gregslist!@den1.mongo1.gear.host:27001/clairgregslist'

let connection = mongoose.connection

//establish connection
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//consolelog errors
connection.on('error', err => {
  console.log('Database Error: ', err)
})

//confirm connection
connection.once('open', () => {
  console.log('Successfully connected to database')
})