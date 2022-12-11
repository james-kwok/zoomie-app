const express = require('express');
const router = express.Router();
const checkinsController = require('../controllers/checkinsController');
const auth = require('../middleware/auth');

router.get('/:id', checkinsController.getCheckedInDogs)
router.post('/', auth, checkinsController.postCheckIn)

module.exports = router;