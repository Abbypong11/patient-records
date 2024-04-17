import { DiagnosisModel } from "../models/diagnosis.model.js";

export const getDiagnosis = async (req, res) => {
  try {
    const diagnosis = await DiagnosisModel.find();

    res.status(200).json(diagnosis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
