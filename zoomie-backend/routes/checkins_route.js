const express = require('express');
const router = express.Router();
const checkinsController = require('../controllers/checkinsController');
const auth = require('../middleware/auth');

router.get('/', checkinsController.getCheckIns)
router.post('/', auth, checkinsController.postCheckIn)
router.get('/:id', checkinsController.getCheckedInDogs)

module.exports = router;