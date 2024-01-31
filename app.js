const express = require('express');
const exphbs = require('express-handlebars');
const Stripe = require('stripe');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const sequelize = require('./config/connection');
require('dotenv').config();
const routes = require('./controllers');


const stripe = Stripe();

require('dotenv').config();

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUnintialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Create an Express application
const app = express();
app.use(session(sess));
// Middleware to log information about each incoming request
app.use((req, res, next) => {
    console.log(`Received a ${req.method} request for ${req.url}`);
    next(); // Pass control to the next middleware or route handler
});

// Set up Handlebars
app.engine('handlebars', exphbs.engine({
  partialsDir: 'views/partials/'
}));
app.set('view engine', 'handlebars');
// // Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(express.json());

// Set up Sequelize
//const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
 // host: process.env.DB_HOST,
  //dialect: 'mysql',
//});
// Load models
const { Tea, Cart, Orders } = require('./models'); // Adjust the path based on your project structure

// Associate models if needed
// Tea.associate(models);
// Cart.associate(models);
// Orders.associate(models);
app.use(routes);

/*
------------------
HEADER PAGE ROUTES
------------------
*/

// Route for Home
app.get('/', (req, res) => {
  res.render('home');
});

// Route for Tea
app.get('/tea', (req, res) => {
  res.render('tea');
});

// Route for Teaware
app.get('/teaware', (req, res) => {
  res.render('teaware');
});

// Route for Events
app.get('/events', (req, res) => {
  res.render('events');
});

// Route for Gift Cards
app.get('/gift-cards', (req, res) => {
  res.render('giftCards');
});

// Route for Blog
app.get('/blog', (req, res) => {
  res.render('blog');
});

// Route for the search pane
app.get('/search', (req, res) => {
  res.render('search');
}); 

// Route for the search pane
app.get('/user-profile', (req, res) => {
  res.render('userProfile');
});

// Route for the search pane
app.get('/cart', (req, res) => {
  res.render('cart');
});

/*
------------------
FOOTER PAGE ROUTES
------------------
*/

// Route for the shipping policy
app.get('/shipping-policy', (req, res) => {
  res.render('shippingPolicy');
});

// Route for privacy policy
app.get('/privacy-policy', (req, res) => {
  res.render('privacyPolicy');
});

// Route for wholesale page
app.get('/wholesale', (req, res) => {
  res.render('wholesale');
});

// Route for about us page
app.get('/about-us', (req, res) => {
  res.render('aboutUs');
});

// Route for contact page
app.get('/contact-us', (req, res) => {
  res.render('contactUs');
});

// Route for FACs page
app.get('/faqs', (req, res) => {
  res.render('faqs');
});

// Route for flower moon latte recipe
app.get('/flower-moon-latte', (req, res) => {
  res.render('flowerMoonLatte');
});

// Route for flower moon grass product page
app.get('/moon-grass', (req, res) => {
  res.render('moonGrass');
});

// Route for matcha ideas page
app.get('/matcha-recipes', (req, res) => {
  res.render('matchaRecipes');
});

// Route for secret moonshine page
app.get('/moonshine', (req, res) => {
  res.render('faqs');
});


// Start the server
const PORT = process.env.PORT || 3001;
// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database connection has been established successfully.');
    
    app.listen(PORT, () => console.log(`App listening on port ${PORT}.`));
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });






  