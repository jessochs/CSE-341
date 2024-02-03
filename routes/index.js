const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

// const lesson1 = require('../controllers/lesson1');

// router.get('/', lesson1.loganRoute)
module.exports = router;
