const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUser);
router.post('/create', userController.createUser);
router.put('/:id', userController.updateUser);

module.exports = router;