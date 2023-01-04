import mongoose from 'mongoose';

const appointmentSchema = mongoose.Schema({
    billid: String,
    amount: String,
    discount_amount:String,
    amount_paid:String,
    due_balance:String,
    appointment:String,
    bill_transaction_number:String,
    bill_transaction_type:String,
    lab_appointment:String,
    group:Number,
    date: String
})

var Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;