import DiagnosisModel from "../models/diagnosis.model.js";

export const addDiagnosis = async (req, res, next) => {
  try {
    const addDiagnosis = await DiagnosisModel.create(req.body);

    res.status(200).json(addDiagnosis);
  } catch (error) {
    next(error);
  }
};

export const getDiagnosis = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getDiagnosis = await DiagnosisModel.findById(id);

    res.status(200).json(getDiagnosis);
  } catch (error) {
    next(error);
  }
};

export const getAllDiagnosis = async (req, res, next) => {
  try {
    const getAllDiagnosis = await DiagnosisModel.find({});

    res.status(200).json(getAllDiagnosis);
  } catch (error) {
    next(error);
  }
};
