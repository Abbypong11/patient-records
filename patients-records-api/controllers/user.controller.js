import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserModel  from "../models/user.model.js";
import { TokenModel } from "../models/token.model.js";

// Create or Register new user

export const registerUser = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(8);
  try {
    const user = {
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      password: bcrypt.hashSync(req?.body?.password, salt),
    };
    const userExist = await UserModel.findOne({ email: req?.body?.email });
    if (userExist) {
      return res.status(409).json({ message: "User already exist" });
    }
    await UserModel.create(user);
    res.status(201).json({
      message: "User registered successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Find one user with username
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json("No user found!");
    }
    // Compare passwords
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json("Invalid password provided for user!");
    }
    // Generate JWT for user
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    //save users token
    await TokenModel.create({ userId: user._id});
    // Return response
    res.status(200).json({
      message: "User login successful!",
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

//getting a  user
export const userProfile = async (req, res, next) => {
  try {
    const singleUser = await UserModel.findById(req.user.id);
    res.status(201).json({
      id: singleUser._id,
      email: singleUser.email,
      firstName: singleUser.firstName,
      lastName: singleUser.lastName
    });
  } catch (error) {
    next(error);
  }
};

// export const userProfile = async (req, res) => {
//   // Find user with id
//   const findByIdResult = await UserModel.findById(req.auth.id).select({
//     password: 0,
//   });
//   if (!findByIdResult) {
//     return res.status(404).json("No user found!");
//   }
//   // Return response
//   res.status(200).json(findByIdResult);
// };

export const logoutUser = async (req, res) => {
  // User will be logged out by clearing their token from the backend
  // Later on we can look at having a Token model to track and invalidate tokens on the server
  res.status(501).json("User logout not implemented!");
};
