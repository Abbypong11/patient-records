import { Router } from "express";
import {addDiagnosis, getAllDiagnosis, getDiagnosis} from "../controllers/diagnosis.controllers.js"

//Create a router
const router = Router();

//Define routes
router.post('/', addDiagnosis);

router.get('/', getAllDiagnosis);

router.get('/:id', getDiagnosis);

export default router;