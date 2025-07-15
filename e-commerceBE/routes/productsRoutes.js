const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Definizione delle rotte
router.get('/', productsController.getProducts);
router.post('/', productsController.createProduct);
router.get('/:id', productsController.getProductById);

module.exports = router;