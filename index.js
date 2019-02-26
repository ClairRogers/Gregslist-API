let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

//initialize connection
require('./server-assets/db/gearhost-config')

//middlewear
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

//Routes
let carRoutes = require('./server-assets/routes/car-routes')
server.use('/api/cars', carRoutes)

//Catchall
server.use('*', (req, res, next) => {
  res.status(404).send('No matching routes')
})

//server
server.listen(port, () => {
  console.log('server running on port: ', port)
})