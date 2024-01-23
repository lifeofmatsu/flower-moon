const router = require('express').Router();
const { tea } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blankData = await tea.findAll({
            include: [{}],
        });
        res.status(200).json(blankData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/tea/:id', async (req, res) => {
    try {
        const blankData = await tea.findByPk(req.params.id, {
            include: [{}],
        });
        if (!blankData) {
            res.status(404).json({ 
              message: 'There is no tea with this ID.'
            });
            return;
          }
        res.status(200).json(blankData);
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