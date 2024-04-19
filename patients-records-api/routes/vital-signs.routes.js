import { Router } from "express";
import {addVitalSigns, getVitalSigns, getAllVitalSigns} from "../controllers/vital-signs.controllers.js";

// Create a router
const router = Router();

// Define routes
router.post("/", addVitalSigns);

router.get("/:id", getVitalSigns);

router.get("/", getAllVitalSigns);

export default router;




