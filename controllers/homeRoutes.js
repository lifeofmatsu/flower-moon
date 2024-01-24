const router = require('express').Router();
const { Tea, Cart, CartItem, Orders, OrderItem, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const teaData = await Tea.findAll({
            include: [{}],
        });
        res.status(200).json(teaData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/tea/:id', async (req, res) => {
    try {
        const teaData = await Tea.findByPk(req.params.id, {
            include: [{}],
        });
        if (!teaData) {
            res.status(404).json({ 
              message: 'There is no tea with this ID.'
            });
            return;
          }
        res.status(200).json(teaData);
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