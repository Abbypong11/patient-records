import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

const vitalSignsSchema = new Schema({
patientId: {type: ObjectId ,  required:true, },
temperature: {type: Number,  required:true},
bloodPressure: {type: Number, required:true},
weight:{type: Number, required:true},
height:{type: Number, required:true}

});
export const VitalSignsModel = model("VitalSigns", vitalSignsSchema);