import express from 'express';

import { createLabAppointment , getAppointments } from '../controllers/appointments.js';

const router = express.Router();

router.post('/', createLabAppointment);
router.get('/', getAppointments);

export default router;