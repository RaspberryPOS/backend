const express = require('express')
const router = express.Router()
let prisma = null

// Get all OptionPrep
router.get('/', async (req, res) => {
  const data = await prisma.optionPrep.findMany({})
  res.json(data)
})

// Update OptionPrep

// Create OptionPrep

// No delete OptionPrep currently
// ########################

module.exports = function (prismaInstance) {
  prisma = prismaInstance
  return router
}
