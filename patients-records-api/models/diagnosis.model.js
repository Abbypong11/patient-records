import { Schema, model, Types } from "mongoose";

// Define diagnosis schema
const DiagnosisSchema = new Schema({
  // patientId: { type: Types.ObjectId, required: true },
  summary: { type: String, required: true },
});

const DiagnosisModel = model("Diagnosis", DiagnosisSchema);
export default DiagnosisModel;
