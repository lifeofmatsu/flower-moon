const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Function to generate JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });
};

router.post('/', async (req, res) => {
  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userData = await User.create({ ...req.body, password: hashedPassword });

    // Generate and send JWT as a response
    const token = generateToken(userData);
    
    res.status(200).json({ user: userData, token });
  } catch (err) {
    res.status(400).json(err);
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

    // Generate and send JWT as a response
    const token = generateToken(userData);
    
    res.json({ user: userData, token, message: 'You are now logged in!' });
  } catch (err) {
    res.status(400).json(err);
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