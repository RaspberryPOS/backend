const express = require('express')
const router = express.Router()
let prisma = null

// Get all MenuItems
// Query parameter to limit to a specific menuId
router.get('/', async (req, res) => {
  let query = {
    where: {},
    include: {
      foods: {
        include: {
          options: {
            include: {
              prepOpts: true,
              foodOpts: true,
            },
          },
        },
      },
      menus: {
        select: {
          id: true,
        },
      },
    },
  }
  // Check if menuId provided and filter to selected menu
  let menuId = req.query['menuId']
  if (menuId && parseInt(menuId)) {
    query['where'] = {
      menus: {
        some: {
          id: {
            in: parseInt(menuId),
          },
        },
      },
    }
  }

  const data = await prisma.menuItem.findMany(query)
  res.json(data)
})

module.exports = function (prismaInstance) {
  prisma = prismaInstance
  return router
}
