const router = require('express').Router();
const { Tea, User } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     const teaData = await Tea.findAll({ include: [{ model: User, attributes: ['order'] }] });
//     res.status(200).json(teaData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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
const path = require('path');
// Define a route to render the home page
router.get('/', async (req, res) => {
  try {
    const teaData = await Tea.findAll();
    const teas = teaData.map(teaListing => teaListing.get({ plain: true }));
    console.log("HOME",teas)
    res.render('home', {
      teaData: teas
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// router.get('/home', (req, res) => {
//   res.sendFile(path.join(__dirname, '../views/home.handlebars'));
// });

router.get("/tea",(req,res) => {
  res.render("teaListings")
})

router.get("/user",(req,res) => {
  res.render("login")
})
router.get('/users', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Tea }],
    });
    const user = userData.get({ plain: true });
    res.render('users', { ...user, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/tea');
  } else {
    res.render('login');
  }
});

module.exports = router;