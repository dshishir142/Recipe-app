const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')

router.get('/login', userController.getData);
router.post('/signUp', userController.createData);

module.exports = router;