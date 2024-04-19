import { Schema, model } from "mongoose";

//Define User Schema
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const UserModel = model("User", userSchema, "users");

export default UserModel; 