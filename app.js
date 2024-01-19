const express = require('express');
const app = express();
const productRoutes = require('./routes/index');

app.use('/', productRoutes);