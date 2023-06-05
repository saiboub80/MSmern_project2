//const express = require('express');
//const app = express();
//const mongoose = require('mongoose')
const User = require('../Models/users')
const {hidePassword, comparePassword} = require('../Helpers/auth')
const test = (req, res) => { 
  res.json('test is working')
}
 
const registerUser =  async (req, res) => {
    try {
      const {name, age, username, email, password} = req.body;
      //check if name was entered
      if(!name){
        return res.json({
          error: 'Name is required'
        })
      };
      //check username
      const uexist = await User.findOne({username});
      if(uexist){
        return res.json({
          error: 'username is taken already'
        })
      }
      //check email 
      const exist = await User.findOne({email});
      if(exist){
        return res.json({
          error: 'Email is taken already'
        })
      };
      //check is password is good
      if(!password || password.length < 6){
        return res.json({
          error: 'Password should be 6 characters or longer'
        })
      };

      const hiddenPassword =  await hidePassword(password)
      //create user  
      const user = await User.create({
        name, age, username, email, password: hiddenPassword
      })

        return res.json(user)
    } catch (error) {
      console.log(error)
    }
}

module.exports ={
  test,
  registerUser,
}