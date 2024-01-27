// seeds/teaCategories.js
const { Tea } = require('../models');

const categoryData = [
    {
      id: 1,
      name: "Green Tea",
      category: "Green",
      price: 10.00,
      sold: false,
      description: "Fresh and light teas with minimal oxidation",
      image: "green_tea_category.jpg",
    },
    {
      id: 2,
      name: "Pink Tea",
      category: "Pink",
      price: 10.00,
      sold: false,
      description: "Fully oxidized teas with rich and bold flavors",
      image: "pink_tea_category.jpg",
    },
    {
      id: 3,
      name: "Herbal Tea",
      category: "Green",
      price: 10.00,
      sold: false,
      description: "Infusions made from herbs, fruits, and flowers",
      image: "herbal_tea_category.jpg",
    },
    {
      id: 4,
      name: "Oolong Tea",
      category: "Green",
      price: 10.00,
      sold: false,
      description: "Partially oxidized teas with a wide range of flavors",
      image: "oolong_tea_category.jpg",
    },
    {
      id: 5,
      name: "White Tea",
      category: "Green",
      price: 10.00,
      sold: false,
      description: "Delicate teas made from young leaves and buds",
      image: "white_tea_category.jpg",
    },
    {
      id: 6,
      name: "Pu-erh Tea",
      category: "Green",
      price: 10.00,
      sold: false,
      description: "Fermented and aged teas with unique earthy tones",
      image: "puerh_tea_category.jpg",
    },
  
  ];
  const teaCategories = () => Tea.bulkCreate(categoryData);


  module.exports = teaCategories;
  