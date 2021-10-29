const express = require('express');
const router = express.Router();
const logsController = require('../controllers/logs');

router.get('/', logsController.index);
router.get('/:id', logsController.show);

module.exports = router;