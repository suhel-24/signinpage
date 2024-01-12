const User = require("./database/userschema");
const dbconnect = require('./database/db')
const asynchandler= require("express-async-handler")
dbconnect();
const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())
app.post("/signup",asynchandler( async(req,res)=>{
    const userDetails = {
        email: req.body.email,
        password: req.body.password,
      };
        // check if user already exists
      const userExists = await User.findOne({ email: userDetails.email });
      if (userExists) {
        res.status(400);
        throw new Error("User already exists");
      } 
      
      const createdUser = await User.create({
        ...userDetails
      });
      if (createdUser) {
        res.status(201).json({
          id: createdUser._id,
          email: createdUser.email,
        });
      } else {
        res.status(400);
        throw new error("invalid user");
      }
}))

app.post("/login",asynchandler(async(req,res)=>{
    const userDetails = {
        email: req.body.email,
        password: req.body.password,
      };

      const user = await User.findOne({ email: userDetails.email });
      if (user && (userDetails.password === user.password)) {
        res.json({
          _id: user._id,
          email: user.email
        });
      } else {
        res.status(400);
        throw new Error("Invalid credentials");
      }  
}))

app.listen(4000)