const { PrismaClient } = require('@prisma/client')
const { menus } = require('./seed_data/menu.js')
const { menuItems } = require('./seed_data/menuItem.js')
const { foods } = require('./seed_data/food.js')
const { options } = require('./seed_data/option.js')
const prisma = new PrismaClient()

const load = async () => {
  try {
    // FLUSH DATABASE
    await prisma.menu.deleteMany()
    console.log('Deleted records in Menu table')

    await prisma.menuItem.deleteMany()
    console.log('Deleted records in MenuItem table')

    await prisma.optionFood.deleteMany()
    console.log('Deleted records in OptionFood table')

    await prisma.optionPrep.deleteMany()
    console.log('Deleted records in OptionPrep table')

    await prisma.option.deleteMany()
    console.log('Deleted records in Food table')

    await prisma.food.deleteMany()
    console.log('Deleted records in Food table')

    // CREATE RECORDS

    // Create the Menus
    console.log('Creating Menus')
    await Promise.all(
      menus.map(async (menu) => {
        const item = await prisma.menu.create({ data: menu })
        console.log(`Created ${item.name}`)
      })
    )
    // Create the MenuItems
    console.log('Creating MenuItems')
    await Promise.all(
      menuItems.map(async (menuItem) => {
        const item = await prisma.menuItem.create({ data: menuItem })
        console.log(`Created ${item.name}`)
      })
    )
    // Create the Foods and link to MenuItems
    console.log('Creating Foods')
    await Promise.all(
      foods.map(async (food) => {
        const item = await prisma.food.create({ data: food })
        console.log(`Created ${item.name}`)
      })
    )
    // Create the Options and link to Foods
    console.log('Creating Options')
    await Promise.all(
      options.map(async (option) => {
        const item = await prisma.option.create({ data: option })
        console.log(`Created ${item.name}`)
      })
    )
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
