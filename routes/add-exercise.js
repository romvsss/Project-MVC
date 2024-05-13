const express = require('express');
const controller = require('../controllers/controllers');
const router = express.Router();

router.get('/add-exercise', (req, res) => {
    res.render('add-exercise');
})
router.post('/add-exercise', controller.addExercise);

module.exports = router;