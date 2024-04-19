import express from "express";
import {
  createUser,
  loginUser,
  getUser,
  logoutUser,
} from "../controllers/user.controller.js";

// Create a route
const router = express.Router();

// Define routes
router.post("/register", createUser);

router.post("/login", loginUser);

router.get("/me", getUser);

router.post("/logout", logoutUser);

// Export router
export default router;
