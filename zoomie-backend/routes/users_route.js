const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// router.get('/', usersController)
router.post('/', usersController.addUser)

module.exports = router;