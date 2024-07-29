const mongoose = require('mongoose');
const user = require('../models/user.js');

exports.getData = async(req, res) => {
    try{
        userData = await user.find({email: req.body.email, password: req.body.password})
        if(userData != ""){
            res.send(`Hello ${userData[0].name}`);
        }else{
            res.send("User not available");
        }
    }catch (error){
        res.send({status: "Error", "Error": error});
    }
}

exports.createData = async(req, res) => {
    try{

        const newUser = new user({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password

        });

        const savedData = await newUser.save();
        res.send({status: "Success", id : savedData._id});
    }catch (error){
        res.send({status : "Error" , Error : error});
    }
}