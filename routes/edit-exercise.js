const express = require('express');
const controller = require('../controllers/controllers');
const router = express.Router();

router.get('/edit-exercise/:id', controller.renderEditExercise);
router.post('/edit-exercise/:id', controller.editExercise);
router.get('/delete-exercise/:id', controller.deleteExercise);

module.exports = router;