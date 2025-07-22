const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

// POST /api/auth/login
router.post('/', authController.login);

module.exports = router;