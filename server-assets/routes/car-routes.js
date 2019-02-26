const router = require('express').Router()
let Car = require('../models/Car')

//get all
router.get('', (req, res, next) => {
  Car.find({})
    .then(cars => {
      res.status(200).send(cars)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//get by id
router.get('/:id', (req, res, next) => {
  Car.findById(req.params.id)
    .then(car => {
      if (car) {
        return res.status(200).send(car)
      }
      res.status(400).send('No cat with that ID')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//create
router.post('', (req, res, next) => {
  Car.create(req.body)
    .then(car => {
      res.status(201).send({ message: 'car created successfully', data: car })
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//edit
router.put('/:id', (req, res, next) => {
  Car.findOneAndUpdate({ _id: req.params.id }, req.body, { new: TextTrackCueList })
    .then(car => {
      res.status(200).send(car)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//delete
router.delete('/:id', (req, res, next) => {
  Car.findOneAndDelete({ _id: req.params.id })
    .then(oldData => {
      res.status(200).send('Successfully deleted')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})


module.exports = router