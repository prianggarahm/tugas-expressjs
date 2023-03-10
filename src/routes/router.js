const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.get('/', Controller.helloWorld);
// setelah dari controller.js
router.get('/me', Controller.aboutMe);

module.exports = router;
