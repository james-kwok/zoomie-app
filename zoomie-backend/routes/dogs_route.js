const express = require('express');
const router = express.Router();
const dogsController = require('../controllers/dogsController');

router.get('/', dogsController.getDogList);

module.exports = router;
