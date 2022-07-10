const { Prisma, PrismaClient } = require('@prisma/client')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  console.log(`🛠️  DEVELOPMENT Mode detected, enabled CORS policy *`)
  app.use(
    cors({
      origin: '*',
    })
  )
}

// ------------------------------------------------
// Menu record APIs
// ------------------------------------------------
// Get all Menus
app.get('/menu', async (req, res) => {
  const menus = await prisma.menu.findMany()
  res.json(menus)
})

// ------------------------------------------------
// MenuItem record APIs
// ------------------------------------------------
// Get all MenuItems
// Query parameter to limit to a specific menuId
app.get('/menuItem', async (req, res) => {
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

// ------------------------------------------------
// Food record APIs
// ------------------------------------------------
// Food records
app.get('/food', async (req, res) => {
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
app.get('/food/:foodId', async (req, res) => {
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

// ------------------------------------------------
// Option record APIs
// ------------------------------------------------
// Get all options
app.get('/option', async (req, res) => {
  const data = await prisma.option.findMany({
    include: {
      prepOpts: true,
      foodOpts: true,
    },
  })
  res.json(data)
})

// Get a specific option
app.get('/option/:optId', async (req, res) => {
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

// ------------------------------------------------
// OptionFood record APIs
// ------------------------------------------------
// Get all option:Food links
app.get('/optionFood', async (req, res) => {
  const data = await prisma.optionFood.findMany({})
  res.json(data)
})

// ------------------------------------------------
// OptionPrep record APIs
// ------------------------------------------------
// Get all option:Preparations
app.get('/optionPrep', async (req, res) => {
  const data = await prisma.optionPrep.findMany({})
  res.json(data)
})

// ------------------------------------------------
// Order record APIs
// ------------------------------------------------
// Get all orders; optionally filter by only incomplete ones
app.get('/order', async (req, res) => {
  const query = {
    where: {},
    include: {
      orderItems: {
        select: {
          id: true,
          fired: true,
          firing: true,
          ready: true,
          food: {
            select: {
              id: true,
              name: true,
              mustBeFired: true,
              category: true,
            },
          },
          foodNotes: true,
          menuItem: {
            select: {
              id: true,
              name: true,
              category: true,
            },
          },
          menuItemhash: true,
          options: {
            select: {
              id: true,
              quantity: true,
              option: {
                select: {
                  id: true,
                  name: true,
                },
              },
              optionPrep: {
                select: {
                  id: true,
                  name: true,
                },
              },
              optionFood: {
                select: {
                  id: true,
                  food: {
                    select: {
                      id: true,
                      name: true,
                      mustBeFired: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }

  // Check if complete query filter provided and add if needed
  let complete = req.query['complete']
  if (complete) {
    query.where['complete'] = complete === 'true'
  }

  // Check if cancelled query filter provided and add if needed
  let cancelled = req.query['cancelled']
  if (cancelled) {
    query.where['cancelled'] = cancelled === 'true'
  }

  const data = await prisma.order.findMany(query)
  res.json(data)
})

// Allow updating an existing order
app.patch('/order/:orderId', async function (req, res) {
  const { orderId } = req.params
  const patch = await prisma.order.update({
    where: {
      id: parseInt(orderId),
    },
    data: req.body,
  })
  res.json(patch)
})

// ------------------------------------------------
// OrderItem record APIs
// ------------------------------------------------
// Allow updating an existing OrderItem
app.patch('/orderItem/:orderItemId', async function (req, res) {
  const { orderItemId } = req.params
  const patch = await prisma.orderItem.update({
    where: {
      id: parseInt(orderItemId),
    },
    data: req.body,
  })
  res.json(patch)
})

// START THE SERVER
const server = app.listen(process.env.PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${process.env.PORT}`)
)
