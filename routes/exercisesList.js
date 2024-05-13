const express = require('express');
const controller = require('../controllers/controllers');
const router = express.Router();

router.get('/', controller.renderExercises);

module.exports = router;