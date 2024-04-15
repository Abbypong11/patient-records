import { Schema } from "mongoose";

// Define diagnosis schema
const DiagnosisSchema = new Schema({
  patientId: { type: String, required: true, ObjectId },

  summary: { type: String, required: true },
});

export const DiagnosisModel = model("Diagnosis", DiagnosisSchema);
