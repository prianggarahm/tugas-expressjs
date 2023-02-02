const express = require('express');
const hobbyController = require('../controllers/hobbyController');

const router = express.Router();

router.get('/', hobbyController.getHobby);

module.exports = router;
