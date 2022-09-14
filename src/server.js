require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./modules')

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(process.PORT || 8080, () => console.log('yondi'))