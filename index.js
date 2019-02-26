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
let houseRoutes = require('./server-assets/routes/house-routes')
let jobRoutes = require('./server-assets/routes/job-routes')
server.use('/api/cars', carRoutes)
server.use('/api/houses', houseRoutes)
server.use('/api/jobs', jobRoutes)

//Catchall
server.use('*', (req, res, next) => {
  res.status(404).send('No matching routes')
})

//server
server.listen(port, () => {
  console.log('server running on port: ', port)
})