const express = require('express');
const router = express.Router();
const TouristController = require('../controllers/tourist.controller');

router.get('/', TouristController.getTourist);
router.get('/:id', TouristController.getTouristById);
router.post('/', TouristController.addTourist);

module.exports = router;
