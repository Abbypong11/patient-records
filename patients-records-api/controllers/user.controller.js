import UserModel from "../models/user.model.js";

export const createUser = async (req, res, next) => {
  try {
    const createUser = await UserModel.create(req.body);
    res.status(200).json(createUser);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const loginUser = await UserModel.loginUser(req.body);
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const getUser = await UserModel.find();
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    const logoutUser = await UserModel.logoutUser(req.body);
  } catch (error) {
    next(error);
  }
};
