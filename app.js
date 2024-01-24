const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

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


// Define a route to render the home page
app.get('/', (req, res) => {
    res.render('home');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
