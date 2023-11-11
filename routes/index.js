const router = require('express').Router();
const clothingItem = require('./clothingItem');
const user = require('./users');
const authMiddleware = require('../middlewares/auth');
const { NOT_FOUND } = require('../utils/errors');
const { getCurrentUser, updateUserProfile } = require('../controllers/users');

router.use('/items', clothingItem);
router.use('/users', authMiddleware, user);

router.get('/me', authMiddleware, getCurrentUser);
router.patch('/me', authMiddleware, updateUserProfile);

router.use((req, res) => {
  res.status(NOT_FOUND).send({message: "Route not found"})
});

module.exports = router;
