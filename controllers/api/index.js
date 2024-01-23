const router = require('express').Router();
const teaRoutes = require('./teaRoutes');
const userRoutes = require('./userRoutes');

router.use('/teas', teaRoutes);
router.use('/users', userRoutes);

module.exports = router;