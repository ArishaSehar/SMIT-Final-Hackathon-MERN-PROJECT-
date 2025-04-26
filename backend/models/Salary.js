import express from 'express';
import { getSalaryDetails } from '../controllers/salaryController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getSalaryDetails);

export default router;
