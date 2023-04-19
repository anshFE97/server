const express = require('express')
const cors = require('cors')

const breeds = require('./routes/breeds.js')
const allBreeds = require('./routes/allBreeds.js')
const breedImages = require('./routes/breedImages.js')
const imageRoute = require('./routes/imageRoute.js')



const port  = 8000

const app = express()

app.use(cors())

app.use('/breed', breeds)

app.use('/all', allBreeds)

app.use('/images', breedImages)

app.use('/cats', imageRoute)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})