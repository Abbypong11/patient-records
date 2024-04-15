import express from 'express';
import { createUser, getAllUsers, getUser, deleteUser, updateUser } from '../controllers/user.controllers.js';

// Create a route
const router = express.Router();

// Define routes
router.post('/', createUser);

router.get('/', getAllUsers);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;