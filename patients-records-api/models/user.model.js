import { Schema, model } from "mongoose";

//Define User Schema
const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Export request model based on  the schema created above.
export const UserModel = model("User", userSchema, "users");