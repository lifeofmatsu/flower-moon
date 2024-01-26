// seeds/orders.js
const { Orders } = require('../models');

const ordersList = [
    {
      id: 1,
      user_id: 1,
      products: [
        {
          productId: 1,
          quantity: 2,
        },
        {
          productId: 3,
          quantity: 1,
        },
      ],
      orderDate: new Date(),
      status: "Pending",
    },
    {
      id: 2,
      user_id: 2,
      products: [
        {
          productId: 2,
          quantity: 3,
        },
        {
          productId: 4,
          quantity: 2,
        },
      ],
      orderDate: new Date(),
      status: "Shipped",
    },
    {
      id: 3,
      user_id: 3,
      products: [
        {
          productId: 5,
          quantity: 1,
        },
        {
          productId: 6,
          quantity: 4,
        },
      ],
      orderDate: new Date(),
      status: "Delivered",
    },
    
  ];

  const orders = () => Orders.bulkCreate(ordersList);

  
  module.exports = orders;
  