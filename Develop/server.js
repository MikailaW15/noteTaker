const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3001
app.use(express.static('public'))

require('./routes/api.routes')(app)
require('./routes/routes')(app)




















app.listen(PORT, () => {
    console.log(`Server is listenong ${PORT}`)
})