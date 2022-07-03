import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'
require('dotenv').config()

const prisma = new PrismaClient()
const app = express()
var env = process.env.NODE_ENV

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
  let menuId = req.query['menuId'] as string
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

const server = app.listen(process.env.PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${process.env.PORT}`)
)
