import mongoose from 'mongoose';

const appointmentSchema = mongoose.Schema({
    billid: String,
    amount: String,
    discount_amount:String,
    appointment:String,
    lab_appointment:String,
    bill_details:[{
        amount_paid : {type :String},
        due_balance : {type :String},
        bill_transaction_type: {type :String},
        bill_transaction_number:{type :String},
        due_settlement_date : {
            type: Date,
            default: Date.now,
        }
    }],
    group:Number,
    date: String
})

var Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;