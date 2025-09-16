const express = require('express');
const { getCart, addToCart, removeFromCart, updateCartItem } = require('../controllers/cartController');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.get('/', getCart);
router.post('/add', addToCart);
router.delete('/remove/:productId', removeFromCart);
router.put('/update/:productId', updateCartItem);

module.exports = router;