const router = require('express').Router();
const teaRoutes = require('./teaRoutes');
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');
const cartRoutes = require('./cartRoutes');

router.use('/cart', cartRoutes);
router.use('/orders', orderRoutes);
router.use('/teas', teaRoutes);
router.use('/users', userRoutes);

module.exports = router;