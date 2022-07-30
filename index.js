const { Prisma, PrismaClient } = require('@prisma/client')
const http = require('http')
const express = require('express')
const faye = require('faye') // For pub/sub system for event notification
const cors = require('cors')
require('dotenv').config()
const fayeMount = '/faye'

// Database connection with Prisma
const prisma = new PrismaClient()

// Express API
const app = express()
app.use(express.json())

// Faye pubsub system
const server = http.createServer(app)
const bayeux = new faye.NodeAdapter({ mount: fayeMount, timeout: 45 })

// Log errors
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.send(500)
})

// Setup if in dev
if (process.env.NODE_ENV === 'development') {
  console.log(`🛠️  DEVELOPMENT Mode detected, enabled CORS policy *`)
  app.use(
    cors({
      origin: '*',
    })
  )
}

// Menu record APIs
const menu = require('./routes/Menu')(prisma)
app.use('/menu', menu)

// MenuItem record APIs
const menuItem = require('./routes/MenuItem')(prisma)
app.use('/menuItem', menuItem)

// Food record APIs
const food = require('./routes/Food')(prisma)
app.use('/food', food)

// Option record APIs
const option = require('./routes/Option')(prisma)
app.use('/option', option)

// OptionFood record APIs
const optionFood = require('./routes/OptionFood')(prisma)
app.use('/optionFood', optionFood)

// ------------------------------------------------
// OptionPrep record APIs
const optionPrep = require('./routes/OptionPrep')(prisma)
app.use('/optionPrep', optionPrep)

// ------------------------------------------------
// Order record APIs
// ------------------------------------------------
const order = require('./routes/Order')(prisma, bayeux)
app.use('/order', order)

// ------------------------------------------------
// OrderItem record APIs
// ------------------------------------------------
const orderItem = require('./routes/OrderItem')(prisma, bayeux)
app.use('/orderItem', orderItem)

// START THE SERVER
bayeux.attach(server)
server.listen(process.env.PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${process.env.PORT}`)
)
