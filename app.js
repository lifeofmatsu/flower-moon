const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const routes = require('./controllers');

// Create an Express application
const app = express();

// Middleware to log information about each incoming request
// app.use((req, res, next) => {
//     console.log(`Received a ${req.method} request for ${req.url}`);
//     next(); // Pass control to the next middleware or route handler
// });

// Set up Handlebars
const hbs = exphbs.create({
  // Specify configurations if any
  partialsDir: 'views/partials/'
});

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));
// // app.use(express.static('public'));
// app.use(express.json());

// Set up Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});


// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

// Load models
// const { Tea, Cart, Orders } = require('./models'); // Adjust the path based on your project structure

// Associate models if needed
// Tea.associate(models);
// Cart.associate(models);
// Orders.associate(models);

app.use(routes);

// Stripe Functionality - in progress

// const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

// const storeItems = new Map([
//     [1, {priceInCents: 1000, name: 'Black Tea'}],
//     [2, {priceInCents: 2200, name: 'Matcha'}],
// ]);

// Start the server
const PORT = process.env.PORT || 3001;
// Sync sequelize models to the database, then turn on the server
sequelize.sync({force: false})
.then(()=>{
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})


