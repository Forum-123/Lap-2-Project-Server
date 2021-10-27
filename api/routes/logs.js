const express = require('express');
const router = express.Router();
const logsController = require('../controllers/logs');

router.get('/', logsController.index);
router.get('/:id', logsController.show);
router.post('/', logsController.create);
router.get('/habit/:id', logsController.showByHabit);

module.exports = router;