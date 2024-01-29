const router = require('express').Router();
const { Tea, Cart, Orders } = require('../models');

router.get('/', async (req, res) => {
    console.log('Handling GET /cart');
     try {
        const cartData = await Cart.findAll({
            include: [{ model: Tea }]
        });
        res.status(200).json(cartData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/tea/:id', async (req, res) => {
    try {
        const cartData = await Cart.findByPk(req.params.id, {
            include: [{ model: Tea }]
        });
        if (!cartData) {
            res.status(404).json({ 
              message: 'There is no tea with this ID.'
            });
            return;
        }
        res.status(200).json(cartData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    console.log('Handling POST /');
      try {
        const cartData = await Cart.create();
        res.status(200).json(cartData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;