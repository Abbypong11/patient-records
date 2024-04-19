import VitalSignsModel from "../models/vital-signs.model.js";

export const addVitalSigns = async (req, res, next) => {
  try {
    const addVitalSigns = await VitalSignsModel.create(req.body);

    res.status(200).json(addVitalSigns);
  } catch (error) {
    next(error);
  }
};

export const getVitalSigns = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getVitalSigns = await VitalSignsModel.findById(id);

    res.status(200).json(getVitalSigns);
  } catch (error) {
    next(error);
  }
};

export const getAllVitalSigns = async (req, res, next) => {
  try {
    const getAllVitalSigns = await VitalSignsModel.find({});

    res.status(200).json(getAllVitalSigns);
  } catch (error) {
    next(error);
  }
};
