const options = [
  {
    id: 1,
    foodId: 1,
    name: 'Sauce',
    multiselect: true,
    multiOrder: true,
    freeQty: 1,
    foodOpts: {
      create: [
        {
          foodId: 10,
          price: null,
        },
        {
          foodId: 11,
          price: null,
        },
        {
          foodId: 12,
          price: null,
        },
        {
          foodId: 13,
          price: null,
        },
        {
          foodId: 14,
          price: null,
        },
        {
          foodId: 15,
          price: null,
        },
      ],
    },
  },
  {
    id: 2,
    foodId: 2,
    name: 'Sauce',
    multiselect: true,
    multiOrder: true,
    freeQty: 1,
    foodOpts: {
      create: [
        {
          foodId: 10,
          price: null,
        },
        {
          foodId: 11,
          price: null,
        },
        {
          foodId: 12,
          price: null,
        },
        {
          foodId: 13,
          price: null,
        },
        {
          foodId: 14,
          price: null,
        },
        {
          foodId: 15,
          price: null,
        },
      ],
    },
  },
  {
    id: 3,
    foodId: 4,
    name: 'Sauce',
    multiselect: true,
    multiOrder: true,
    freeQty: 2,
    foodOpts: {
      create: [
        {
          foodId: 16,
          price: null,
        },
        {
          foodId: 17,
          price: null,
        },
      ],
    },
  },
  {
    id: 4,
    foodId: 5,
    name: 'Toppings',
    multiselect: true,
    multiOrder: true,
    freeQty: 2,
    foodOpts: {
      create: [
        {
          foodId: 18,
          price: null,
        },
        {
          foodId: 19,
          price: null,
        },
      ],
    },
  },
  {
    id: 5,
    foodId: 6,
    name: 'Toppings',
    multiselect: true,
    multiOrder: true,
    freeQty: 3,
    foodOpts: {
      create: [
        {
          foodId: 18,
          price: null,
        },
        {
          foodId: 19,
          price: null,
        },
        {
          foodId: 20,
          price: null,
        },
      ],
    },
  },
  {
    id: 6,
    foodId: 2,
    name: 'Sauce Placement',
    multiselect: false,
    multiOrder: false,
    freeQty: 0,
    prepOpts: {
      create: [
        {
          id: 1,
          name: 'Tossed in Sauce',
          price: '0',
        },
        {
          id: 2,
          name: 'Sauce on Side',
          price: '0',
        },
      ],
    },
  },
]
exports.options = options
