const express = require('express')
const router = express.Router()
let prisma = null
let bayeux = null

// Allow updating an existing OrderItem
router.patch('/:orderItemId', async function (req, res) {
  const { orderItemId } = req.params
  const patch = await prisma.orderItem.update({
    where: {
      id: parseInt(orderItemId),
    },
    data: req.body,
  })

  // Publish patch change over Faye
  bayeux
    .getClient()
    .publish('/orderItem/patch', JSON.parse(JSON.stringify(patch)))

  res.json(patch)
})

module.exports = function (prismaInstance, bayeuxInstance) {
  prisma = prismaInstance
  bayeux = bayeuxInstance
  return router
}
