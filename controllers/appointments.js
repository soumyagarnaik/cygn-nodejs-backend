import express from 'express'
import mongoose from 'mongoose';

import Appointment from '../models/appointment.js';

const router = express.Router();

export const getAppointments = async (req, res) => { 
    try {
        const appointment = await Appointment.find();
        res.status(200).json(appointment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createLabAppointment = async (req, res) => {
    const {  billid,amount,discount_amount,amount_paid,appointment,due_balance,bill_transaction_number,
        bill_transaction_type, group,date,lab_appointment} = req.body;

    const newLabAppointment = new Appointment({ billid,amount,discount_amount,appointment,amount_paid,due_balance,bill_transaction_number,
        bill_transaction_type,lab_appointment, group,date })
    try {
        await newLabAppointment.save();

        res.status(201).json(newLabAppointment);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;