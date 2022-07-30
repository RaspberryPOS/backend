const express = require('express')
const router = express.Router()
let prisma = null

// Get all OptionFood links
router.get('/', async (req, res) => {
  const data = await prisma.optionFood.findMany({})
  res.json(data)
})

// Update OptionFood

// Create OptionFood

// No delete OptionFood currently
// ########################

module.exports = function (prismaInstance) {
  prisma = prismaInstance
  return router
}
