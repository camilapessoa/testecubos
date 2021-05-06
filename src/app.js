const express = require('express')
const app = express()
const fs = require('fs')
const teste = require('./routes/teste')
const schedule = require('./routes/scheduleRoutes')

app.use(express.json())

app.use("/", teste)
app.use("/", schedule)

module.exports = app