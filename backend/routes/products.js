const express = require('express');
const { getProducts, getProductById, createProduct } = require('../controllers/productController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', auth, upload.single('image'), createProduct);

module.exports = router;