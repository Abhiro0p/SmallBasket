const express = require('express');
const { createOrder, getOrders, getOrderById } = require('../controllers/orderController');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.post('/', createOrder);
router.get('/', getOrders);
router.get('/:id', getOrderById);

module.exports = router;