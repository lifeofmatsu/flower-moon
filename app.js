const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config()

// Create an Express application
const app = express();

// Middleware to log information about each incoming request
app.use((req, res, next) => {
  console.log(`Received a ${req.method} request for ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

// Set up Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
app.use(express.json())


// Define a route to render the home page
app.get('/', (req, res) => {
    res.render('home');
});

// Stripe Functionality - in progress

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, {priceInCents: 10000, name: 'Black Tea'}],
    [2, {}],
])

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
