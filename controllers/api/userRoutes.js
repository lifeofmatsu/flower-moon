const router = require('express').Router();
const { User, Tea } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Function to generate JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });
};

router.get('/', async (req, res) => {
  try {
    const teaData = await Tea.findAll({ include: [{ model: User, attributes: ['cart','order'] }] });
    res.status(200).json(teaData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userData = await User.create({ ...req.body, password: hashedPassword });
    const token = generateToken(userData);
    res.status(200).json({ user: userData, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await bcrypt.compare(req.body.password, userData.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const token = generateToken(userData);
    res.json({ user: userData, token, message: 'You are now logged in!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;