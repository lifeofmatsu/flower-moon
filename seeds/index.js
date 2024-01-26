// Require the sequelize instance from the config/connection module
const orders = require('./orders');
const teaCategories = require('./tea-categories');
const teaProducts = require('./tea-products');
const users = require('./users');
// Require the sequelize instance from the config/connection module
const sequelize = require('../config/connection');
// const teaCategories = require('./tea-categories');
// const teaProducts = require('./tea-products');
// Define a function to seed all data and sync the database
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  console.log('\n----- CATEGORIES SEEDED -----\n');

  await teaCategories();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  // await teaProducts();
  // console.log('\n----- TAGS SEEDED -----\n');

  await users();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');
  await orders();
  process.exit(0);
};
// Call the seedAll function to seed the database.
seedAll();

console.log('Starting seed process...');
// ... rest of your seed script ...
console.log('Seed process completed successfully.');

