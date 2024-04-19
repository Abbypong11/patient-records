import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import UserRoutes from "./routes/user.routes.js";
import patientRoutes from "./routes/patient.routes.js";
import vitalSignsRoutes from "./routes/vital-signs.routes.js";
import diagnosisRoutes from "./routes/diagnosis.routes.js";

// Load env variables
dotenv.config({ path: [".env.local"] });

// Create express app
const app = express();

// Apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/vital-signs", vitalSignsRoutes);
app.use("/api/diagnosis", diagnosisRoutes);

// Connection to database
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("connected successfully to MongoDb");

  // Set port, listen for incoming requests
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
  });
} catch (error) {
  console.error("Error connecting to MongoDb");
}
