const express = require('express');
const router = express.Router();
const dogsController = require('../controllers/dogsController');

router.get('/', dogsController.getDogList);
router.get('/:id', dogsController.getSingleDog);
// router.get('/users/:id', auth, dogsController.getDogProfile)

module.exports = router;
