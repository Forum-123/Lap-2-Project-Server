const express = require('express');
const router = express.Router();
const logsController = require('../controllers/logs');
const { checkToken } = require('../helpers/helpers');

router.get('/', checkToken, logsController.index);
router.get('/:id', checkToken, logsController.show);
router.post('/', checkToken, logsController.create);
router.get('/habit/:id', checkToken, logsController.showByHabit);

module.exports = router;