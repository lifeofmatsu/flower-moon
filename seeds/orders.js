// seeds/orders.js

const orders = [
    {
      userId: 1,
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
      userId: 2,
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
      userId: 3,
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
  
  module.exports = orders;
  