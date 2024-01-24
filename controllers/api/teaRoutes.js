const router = require('express').Router();
const { Tea, Cart, CartItem, Orders, Orderitem } = require('../models');

router.get('/', async (req, res) => {
    try {
        const teaData = await Tea.findAll({
            include: [ Cart, { model: Orders, through: CartItem }]
        });
        
        res.status(200).json(teaData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/tea/:id', async (req, res) => {
    try {
        const teaData = await Tea.findByPk(req.params.id, {
            include: [ Cart, { model: Orders, through: CartItem }]
        });
        if (teaData) {
            res.render('TeaPage', Tea.get({ plain: true }));
        } else
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

router.post('/', async (req, res) => {
    try {
      const teaData = await Tea.create();
      res.status(200).json(teaData);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
  module.exports = router;