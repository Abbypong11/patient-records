import { Router } from "express";
import {addPatient, getAllPatients, getPatient} from "../controllers/patient.controllers.js";

// Create a Router
const router = Router();

// Define routes
router.post('/', addPatient);

router.get('/', getAllPatients);

router.get('/:id', getPatient);



export default router;