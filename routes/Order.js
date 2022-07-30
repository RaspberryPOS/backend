const express = require('express')
const router = express.Router()
let prisma = null
let bayeux = null

// Prisma Select clause for Order record return for consistency
const orderInclude = {
  orderItems: {
    select: {
      id: true,
      fired: true,
      firedTime: true,
      firing: true,
      firingTime: true,
      ready: true,
      totalPrice: true,
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
          totalPrice: true,
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
}

// Get all Order; optionally filter by only incomplete ones
router.get('/', async (req, res) => {
  const query = {
    where: {},
    include: orderInclude,
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

// Update an an existing Order -- namely 'complete' or 'cancelled'
router.patch('/:orderId', async function (req, res) {
  const { orderId } = req.params
  const patch = await prisma.order.update({
    where: {
      id: parseInt(orderId),
    },
    data: req.body,
  })

  // Publish patch change over Faye
  bayeux.getClient().publish('/order/patch', JSON.parse(JSON.stringify(patch)))

  res.json(patch)
})

// Create a new Order
router.post('/', async (req, res) => {
  // Get last submitted order for day to create order number
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  let orderNumber = 1
  const lastOrder = await prisma.order.findFirst({
    select: {
      orderNumber: true,
    },
    where: {
      createdAt: {
        gte: today.toISOString(),
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  if (lastOrder) orderNumber = lastOrder.orderNumber + 1

  // Create order record
  const order = req.body
  order.orderNumber = orderNumber // Set discovered order number
  order.orderItems = { create: order.orderItems }
  order.orderItems.create.forEach((item) => {
    item.options = { create: item.options }
  })

  const orderRecord = await prisma.order.create({
    data: order,
    include: orderInclude,
  })

  // Publish patch change over Faye
  // TO DO IMPORT BAYEUX FROM MAIN
  bayeux
    .getClient()
    .publish('/order/post', JSON.parse(JSON.stringify(orderRecord)))

  res.json(orderRecord)
})

// No delete Order
// ########################

module.exports = function (prismaInstance, bayeuxInstance) {
  prisma = prismaInstance
  bayeux = bayeuxInstance
  return router
}
