const express = require('express')
const imageController = require('../controllers/imageController.js')

const router = express.Router()

router.get('/:breed_id', imageController.fetchCatImage)

module.exports = router