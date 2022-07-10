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
          id: 1,
          foodId: 10,
          price: null,
        },
        {
          id: 2,
          foodId: 11,
          price: null,
        },
        {
          id: 3,
          foodId: 12,
          price: null,
        },
        {
          id: 4,
          foodId: 13,
          price: null,
        },
        {
          id: 5,
          foodId: 14,
          price: null,
        },
        {
          id: 6,
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
          id: 7,
          foodId: 10,
          price: null,
        },
        {
          id: 8,
          foodId: 11,
          price: null,
        },
        {
          id: 9,
          foodId: 12,
          price: null,
        },
        {
          id: 10,
          foodId: 13,
          price: null,
        },
        {
          id: 11,
          foodId: 14,
          price: null,
        },
        {
          id: 12,
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
          id: 13,
          foodId: 16,
          price: null,
        },
        {
          id: 14,
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
          id: 15,
          foodId: 18,
          price: null,
        },
        {
          id: 16,
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
          id: 17,
          foodId: 18,
          price: null,
        },
        {
          id: 18,
          foodId: 19,
          price: null,
        },
        {
          id: 19,
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
