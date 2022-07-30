const express = require('express')
const router = express.Router()
let prisma = null

// Get all Menus
router.get('/', async (req, res) => {
  const menus = await prisma.menu.findMany()
  res.json(menus)
})

// Update Menu

// Create Menu

// No delete menu currently
// ########################

module.exports = function (prismaInstance) {
  prisma = prismaInstance
  return router
}
