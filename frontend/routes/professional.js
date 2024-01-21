const express = require('express');
// const app = express();

const professController = require('../controllers/professional');

const router = express.Router();

router.get('/', professController.getData);

module.exports = router;

