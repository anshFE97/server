const express = require('express')
const breedCOntroller = require('../controllers/breedController.js')

const router = express.Router()

router.get('/:id', breedCOntroller.getBreedData)

module.exports = router