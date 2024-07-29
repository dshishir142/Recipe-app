const mongoose = require('mongoose');
const recipe = require('../models/recipe');

exports.getAllData = async (req,res) => {
    try{
        const recipes = await recipe.find({});
        res.send(recipes);
    }catch (error){
        res.send({status: "Error", "Error" : error});
    }
}

exports.getRecipe = async (req, res) => {
    try{
        const oneRecipe = recipe.findOne({})
        res.send(oneRecipe);
    }catch(error){
        res.send({status: "Error", "Error" : error});
    }
}

exports.search = async (req,res) => {
    try {
        const searchData = await recipe({title: req.body.title});
        res.send(searchData);
    } catch (error){
        res.send({status: "Error", "Error" : error});
    }
}

exports.createData = async (req,res) => {
    try {

    } catch (error){
        console.log(error);
        res.send({status: "Error", "Error" : error});
    }
}

