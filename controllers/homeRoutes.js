const router = require('express').Router();
// const { Tea, Cart, CartItem, Orders, OrderItem, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const teaData = await Tea.findAll({ include: [{ model: User, attributes: ['order'] }] });
    res.status(200).json(teaData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/tea/:id', async (req, res) => {
//   try {
//     const teaData = await Tea.findByPk(req.params.id, { include: [{ model: User, attributes: ['order'] }] });
//     if (!teaData) {
//       res.status(404).json({
//         message: 'There is no tea with this ID.'
//       });
//       return;
//     }
//     res.status(200).json(teaData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Define a route to render the home page
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Tea }]
    });
    const user = userData.get({ plain: true });
    res.render('profile', { ...user, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/tea');
    return;
  }
  res.render('login');
});

module.exports = router;