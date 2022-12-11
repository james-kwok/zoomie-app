const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const auth = require('../middleware/auth');


router.get('/:id', auth, usersController.getDogProfile)
router.post('/signup', usersController.addUser)
router.post('/login', usersController.getUser)

module.exports = router;