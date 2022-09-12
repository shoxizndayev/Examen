require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./src/modules')

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(8080, console.log(8080))