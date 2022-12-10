const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// router.get('/', usersController)
router.post('/signup', usersController.addUser)

module.exports = router;