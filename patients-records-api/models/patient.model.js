import { Schema, model } from "mongoose";

const patientSchema = new Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  emergencyContact: { type: String, required: true },
});
const PatientModel = model("Patient", patientSchema, "patients");
export default PatientModel;
