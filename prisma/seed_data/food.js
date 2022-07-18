const foods = [
  {
    id: 1,
    name: 'Chicken Sandwich',
    description: 'Our famous Korean Fried Chicken Sandwich on a bun',
    available: true,
    mustBeFired: true,
    price: '3.75',
    category: 'Mains',
    tags: [],
    menuItems: {
      connect: [
        {
          id: 1,
        },
      ],
    },
  },
  {
    id: 2,
    name: 'Thigh Bites',
    description:
      'Korea Fried Chicken "Nuggets" - Chunks of juicy Korean Fried Chicken Thigh',
    available: false,
    mustBeFired: true,
    price: '4',
    category: 'Mains',
    tags: [],
    menuItems: {
      connect: [
        {
          id: 2,
        },
      ],
    },
  },
  {
    id: 3,
    name: 'Hand Cut Fries',
    description: 'Crispy and delicious double fried fries',
    available: true,
    mustBeFired: true,
    price: '3',
    category: 'Sides',
    tags: [],
    menuItems: {
      connect: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    },
  },
  {
    id: 4,
    name: 'Bird Dog',
    description: "What is it? I don't know!",
    available: true,
    mustBeFired: true,
    price: '2',
    category: 'Mains',
    tags: [],
    menuItems: {
      connect: [
        {
          id: 4,
        },
      ],
    },
  },
  {
    id: 5,
    name: 'Deep Fried Beef Hot Dog',
    description: 'An all beef hotdog, deep fried on a hotdog bun',
    available: true,
    mustBeFired: true,
    price: '2.5',
    category: 'Mains',
    tags: [],
    menuItems: {
      connect: [
        {
          id: 5,
        },
      ],
    },
  },
  {
    id: 6,
    name: 'Beanie Weenie',
    description: "What is it? I don't know!",
    available: true,
    mustBeFired: true,
    price: '3.5',
    category: 'Mains',
    tags: [],
    menuItems: {
      connect: [
        {
          id: 6,
        },
      ],
    },
  },
  {
    id: 7,
    name: 'Coke',
    description: '12 oz Can',
    available: true,
    price: '1',
    category: 'Drinks',
    tags: [],
    menuItems: {
      connect: [
        {
          id: 7,
        },
      ],
    },
  },
  {
    id: 8,
    name: 'Diet Coke',
    description: '12 oz Can',
    available: true,
    price: '1',
    category: 'Drinks',
    tags: [],
    menuItems: {
      connect: [
        {
          id: 8,
        },
      ],
    },
  },
  {
    id: 9,
    name: 'Water',
    description: '16.9 oz Bottled Water',
    available: true,
    price: '1',
    category: 'Drinks',
    tags: [],
    menuItems: {
      connect: [
        {
          id: 9,
        },
      ],
    },
  },
  {
    id: 10,
    name: 'Red Sauce',
    description: 'describe it here',
    available: true,
    price: '0.25',
    category: 'Sauces',
    tags: [],
  },
  {
    id: 11,
    name: 'Honey Mustard',
    description: 'describe it here',
    available: true,
    price: '0.25',
    category: 'Sauces',
    tags: [],
  },
  {
    id: 12,
    name: 'Buffalo',
    description: 'describe it here',
    available: false,
    price: '0.25',
    category: 'Sauces',
    tags: [],
  },
  {
    id: 13,
    name: 'Soy Garlic',
    description: 'describe it here',
    available: true,
    price: '0.25',
    category: 'Sauces',
    tags: [],
  },
  {
    id: 14,
    name: 'Garlic Parmesan',
    description: 'describe it here',
    available: true,
    price: '0.25',
    category: 'Sauces',
    tags: [],
  },
  {
    id: 15,
    name: 'Barbeque',
    description: 'Sweet BBQ',
    available: true,
    price: '0.25',
    category: 'Sauces',
    tags: [],
  },
  {
    id: 16,
    name: 'Garlic Aioli',
    description: 'describe it here',
    available: true,
    price: '0.25',
    category: 'Toppings',
    tags: [],
  },
  {
    id: 17,
    name: 'Sriracha Aioli',
    description: 'describe it here',
    available: true,
    price: '0.25',
    category: 'Toppings',
    tags: [],
  },
  {
    id: 18,
    name: 'Mustard',
    description: null,
    available: true,
    price: '0.1',
    category: 'Toppings',
    tags: [],
  },
  {
    id: 19,
    name: 'Ketchup',
    description: null,
    available: true,
    price: '0.1',
    category: 'Toppings',
    tags: [],
  },
  {
    id: 20,
    name: 'Onions',
    description: 'Chopped onions',
    available: true,
    price: '0.25',
    category: 'Toppings',
    tags: [],
  },
]

exports.foods = foods
