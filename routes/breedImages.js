const express = require('express')
const breedImageController = require('../controllers/breedImageController.js')

const router = express.Router()

router.get('/:breedName', breedImageController.getImagesData)

module.exports = router