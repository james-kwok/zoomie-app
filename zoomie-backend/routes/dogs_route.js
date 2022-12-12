const express = require('express');
const router = express.Router();
const dogsController = require('../controllers/dogsController');
const auth = require('../middleware/auth');

router.get('/', dogsController.getDogList);
router.get('/profile', auth, dogsController.getUserDog);
router.get('/:id', dogsController.getSingleDog);

module.exports = router;
