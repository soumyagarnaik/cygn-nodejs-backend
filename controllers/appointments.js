import express from 'express'
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler'

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

export const getAppointmentByLabId= asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const appointment=await Appointment.find({billid : id})
    if(appointment){
        res.json(appointment)
    }else{
        res.status(404)
        throw new Error('appointment not found')
        
    }
    
})
export const updatePendingBills  = asyncHandler(async(req,res) => {
    const {id} = req.params;
    const appointment = await Appointment.find({billid : id})
    if(appointment[0]) {
        appointment[0].bill_details.push({amount_paid: req.body.amount_paid,
            amount_paid: req.body.amount_paid,
            bill_transaction_type: req.body.bill_transaction_type,
            bill_transaction_number: req.body.bill_transaction_number,
            due_balance: (appointment[0].bill_details && appointment[0].bill_details[appointment[0].bill_details.length-1] && appointment[0].bill_details[appointment[0].bill_details.length-1].due_balance) -req.body.amount_paid})
        const updateData = await appointment[0].save()
        res.json(updateData)
    }
})
export const createLabAppointment = async (req, res) => {
    const {  billid,amount,discount_amount,amount_paid,appointment,due_balance,bill_transaction_number,
        bill_transaction_type, group,date,lab_appointment} = req.body;
    let bill_details = []
    bill_details.push({amount_paid:amount_paid,due_balance:due_balance,bill_transaction_type:bill_transaction_type,bill_transaction_number:bill_transaction_number})
    const newLabAppointment = new Appointment({ billid,amount,discount_amount,appointment,bill_details,lab_appointment, group,date })
    
    try {
        await newLabAppointment.save();

        res.status(201).json(newLabAppointment);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;