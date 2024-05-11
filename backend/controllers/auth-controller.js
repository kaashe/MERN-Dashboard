const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const register = async (req, resp) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return resp.status(404).json({ message: "Email exist" });
    }
    const createdUser = await User.create({ username, email, phone, password });
    resp
      .status(200)
      .json({
        message: "User created succesfuly!",
        status: 200,
        token: await createdUser.generateToken(),
        userID:createdUser._id.toString(),
      });
  } catch (error) {
    resp.status(500).send("internal server error");
    console.log("error from controller",error);
    next(error);
  }
};

const login = async (req, resp) => {
  try {
    const {email, password} = req.body;
    const UserExist = await User.findOne({email});
    if(!UserExist){
      resp.status(400).send({ message: "invalid credentials", status: 400 });
    }
    const isValidUser = await UserExist.comparePassword(password);
    if(isValidUser){
      resp.status(200).send({
        message:"Logged in Succesful!",
        status: 200,
        token: await UserExist.generateToken(),
        userID:UserExist._id.toString(),
      })
    }else{
      resp.status(401).send({message:"invalid credentials",status:401})
    }
  
  } catch (error) {
    resp.status(500).send({ message: "internal server error", status: 500 });
    next(error);
  }
};
module.exports = { login, register };
