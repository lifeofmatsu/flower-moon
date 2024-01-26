const router = require('express').Router();
const { Tea, Orders, CartItem } = require('../models');

router.get('/', async (req, res) => {
    try {
        const orderData = await Orders.findAll({
            include: [{ 
                model: Tea,
                through: {
                    model: CartItem,
                    unique: false
                }
            }]
        });
        res.status(200).json(orderData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/tea/:id', async (req, res) => {
    try {
        const orderData = await Orders.findByPk(req.params.id, {
            include: [{ 
                model: Tea,
                through: {
                    model: CartItem,
                    unique: false
                }
            }]
        });
        if (!orderData) {
            res.status(404).json({ 
                message: 'There is no tea with this ID.'
            });
            return;
        }
        res.status(200).json(orderData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const orderData = await Orders.create();
        res.status(200).json(orderData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;