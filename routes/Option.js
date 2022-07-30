const express = require('express')
const router = express.Router()
let prisma = null

// Get all options
router.get('/', async (req, res) => {
  const data = await prisma.option.findMany({
    include: {
      prepOpts: true,
      foodOpts: true,
    },
  })
  res.json(data)
})

// Get a specific option
router.get('/:optId', async (req, res) => {
  const { optId } = req.params
  const data = await prisma.option.findUnique({
    where: {
      id: parseInt(optId),
    },
    include: {
      prepOpts: true,
      foodOpts: true,
    },
  })
  res.json(data)
})

// Update Food

// Create Food

// No delete Food currently
// ########################

module.exports = function (prismaInstance) {
  prisma = prismaInstance
  return router
}
