const express = require('express')
const allBreedsController = require('../controllers/allBreedsController.js')

const router = express.Router()

router.get('/breeds', allBreedsController.getBreedsData)

module.exports = router