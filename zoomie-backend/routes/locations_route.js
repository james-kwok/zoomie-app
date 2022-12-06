const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locationsController');

router.get('/', locationsController.getLocationsList);
router.get('/:id', locationsController.getSingleLocation);

module.exports = router;
