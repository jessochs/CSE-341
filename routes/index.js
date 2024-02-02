const express = require('express');
const router = express.Router();

const lesson1 = require('../controllers/lesson1');
router.use('/contacts', require('./contacts'));
router.get('/', lesson1.loganRoute)
module.exports = router;
