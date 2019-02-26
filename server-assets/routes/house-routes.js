const router = require('express').Router()
let House = require('../models/House')

//get all
router.get('', (req, res, next) => {
  House.find({})
    .then(houses => {
      res.status(200).send(houses)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//get id
router.get('/:id', (req, res, next) => {
  House.findByID(req.params.id)
    .then(house => {
      if (house) {
        return res.status(200).send(house)
      }
      res.status(400).send('No house with that ID')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//create
router.post('', (req, res, next) => {
  House.create(req.body)
    .then(house => {
      res.status(201).send({ message: 'House successfully created', data: house })
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//edit
router.put('/:id', (req, res, next) => {
  House.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(house => {
      res.status(200).send(house)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//delete
router.delete('/:id', (req, res, next) => {
  House.findOneAndDelete({ _id: req.params.id })
    .then(oldData => {
      res.status(200).send('Successfully deleted')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})


module.exports = router