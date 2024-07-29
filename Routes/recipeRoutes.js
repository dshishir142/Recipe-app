const express = require('express');
const router = express.Router();
const recipeController = require('../Controllers/recipeController');

router.get('/', recipeController.getAllData);
router.get('/oneRecipe', recipeController.getRecipe);
router.post('/', recipeController.createData);

module.exports = router;