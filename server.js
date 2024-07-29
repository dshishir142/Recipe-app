const express = require('express');
const app = express();
const userRoutes = require('./Routes/userRoutes')
const recipeRoutes = require('./Routes/recipeRoutes')
const mongoose = require('mongoose');

const PORT = 8000;
app.use(express.urlencoded({extended : false}));
app.use('/user', userRoutes);
app.use('/recipe', recipeRoutes);

const url = "mongodb://localhost:27017/recipe_app";
mongoose.connect(url);

app.listen(PORT, () => {
    console.log("Server connected");
})
