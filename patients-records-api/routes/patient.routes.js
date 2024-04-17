import { Router } from "express";
import {addPatient, getAllPatients, getPatient, updatePatient, deletePatient} from "../controllers/patient.controllers.js";

// Create a Router
const router = Router();

//Define routes
router.post('/', addPatient);

router.get('/', getAllPatients);

router.get('/:id', getPatient);

router.patch('/:id', updatePatient);

router.delete('/id', deletePatient);

export default router;