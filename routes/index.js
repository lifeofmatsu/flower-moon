const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listingController');

router.get('/product/:id', listingController.getTeaListing); // Route for individual tea product

module.exports = router;


