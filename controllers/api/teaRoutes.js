const router = require('express').Router();
const { Tea, Cart, CartItem, Orders } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const teaData = await Tea.findAll({
      include: [{ model: Cart, through: CartItem }, { model: Orders, through: CartItem }]
    });
    res.status(200).json(teaData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/tea/:id', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  }
  try {
    const teaData = await Tea.findByPk(req.params.id, {
      include: [{ model: Cart, through: CartItem }, { model: Orders, through: CartItem }]
    });
    if (teaData) {
      res.render('TeaPage', teaData.get({ plain: true }));
    } else {
      res.status(404).json({ message: 'There is no tea with this ID.' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const teaData = await Tea.create(req.body);
    res.status(200).json(teaData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;