const express = require('express')
const router = express.Router()
let prisma = null

// Food records
router.get('/', async (req, res) => {
  const foods = await prisma.food.findMany({
    include: {
      menuItems: {
        select: {
          id: true,
        },
      },
      options: {
        include: {
          prepOpts: true,
          foodOpts: true,
        },
      },
    },
  })
  res.json(foods)
})

// Get specific food
router.get('/:foodId', async (req, res) => {
  const { foodId } = req.params
  const foods = await prisma.food.findUnique({
    where: {
      id: parseInt(foodId),
    },
    include: {
      options: {
        include: {
          prepOpts: true,
          foodOpts: true,
        },
      },
    },
  })
  res.json(foods)
})

// Update Food

// Create Food

// No delete Food currently
// ########################

module.exports = function (prismaInstance) {
  prisma = prismaInstance
  return router
}
