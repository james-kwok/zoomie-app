const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locationsController');

router.get('/', locationsController.getLocationsList);

module.exports = router;
