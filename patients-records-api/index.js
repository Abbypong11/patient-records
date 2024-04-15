import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load env variables
dotenv.config({ path: [".env.local"] });

// Create express app
const app = express();

// Apply middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}));

// Apply cors
app.use(cors());

// Use routes
// app.use('/api/patients',  )

// Connection to database
await mongoose.connect(process.env.MONGO_URI);
console.log("connected successfully to MongoDb");

// Set port, listen for incoming requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Express server is running on port ${PORT}`)
);
