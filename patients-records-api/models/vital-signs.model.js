import { Schema, model, Types } from "mongoose";

const vitalSignsSchema = new Schema({
  // patientId: { type: Types.ObjectId, required: true },
  temperature: { type: Number, required: true },
  bloodPressure: { type: Number, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
});


const VitalSignsModel = model("VitalSigns", vitalSignsSchema);
export default VitalSignsModel;
