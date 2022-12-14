const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/signup', usersController.addUser);
router.post('/login', usersController.getUser);

module.exports = router;
