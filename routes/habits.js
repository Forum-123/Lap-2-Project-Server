const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits');
const { checkToken } = require('../helpers/helpers');

router.get('/', checkToken, habitsController.index);
router.get('/:id', checkToken, habitsController.show);
router.get('/user/:id', checkToken, habitsController.showByUser)
router.post('/', checkToken, habitsController.create);
router.put('/:id', checkToken, habitsController.update);
router.delete('/:id', checkToken, habitsController.destroy);

module.exports = router;