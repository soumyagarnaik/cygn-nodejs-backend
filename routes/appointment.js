import express from 'express';

import { createLabAppointment , getAppointments,getAppointmentByLabId,updatePendingBills } from '../controllers/appointments.js';

const router = express.Router();

router.post('/', createLabAppointment);
router.get('/', getAppointments);
router.route('/:id').get(getAppointmentByLabId)
router.route('/:id').post(updatePendingBills)

export default router;