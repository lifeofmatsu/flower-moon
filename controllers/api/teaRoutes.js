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

router.post('/', async (req, res) => {
    try {
      const blankData = await tea.create();
      res.status(200).json(blankData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
      const blankData = await Tag.update(req.body, {
        where: {
          id: req.params.id
        }
      });    
      if (!blankData) {
        res.status(404).json({ 
          message: 'No tea exist with current ID'
        });
        return;
      }
      res.status(200).json(blankData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const blankData = await Category.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!blankData) {
        res.status(404).json({
          message: "No tea exist with current ID"
        });
        return;
      }
      res.status(200).json(blankData);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
  module.exports = router;