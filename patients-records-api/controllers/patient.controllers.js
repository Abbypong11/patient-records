import PatientModel from "../models/patient.model.js";

export const addPatient = async (req, res, next) => {
  try {
    const addPatient = await PatientModel.create(req.body);

    res.status(200).json(addPatient);
  } catch (error) {
    next(error);
  }
};

export const getPatient = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getPatient = await PatientModel.findById(id);

    res.status(200).json(getPatient);
  } catch (error) {
    next(error);
  }
};

export const getAllPatients = async (req, res, next) => {
  try {
    const getAllPatients = await PatientModel.find({});

    res.status(200).json(getAllPatients);
  } catch (error) {
    next(error);
  }
};
