const express = require('express');
const router = express.Router();
const dogsController = require('../controllers/dogsController');
const auth = require('../middleware/auth');

router.get('/', dogsController.getDogList);
router.get('/:id', dogsController.getSingleDog);
router.get('/profile/:userId', auth, dogsController.getUserDog);

module.exports = router;
