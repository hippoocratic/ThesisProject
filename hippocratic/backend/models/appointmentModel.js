//Structure of our Collection look like
const mongoose =require('mongoose');


const appointmentSchema = new mongoose.Schema({

    day:{type: String, required: true, maxlength:120},
    time:{type: Number, required: true, maxlength:120},
    date : { type : Date, default: Date.now }
    
    
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;

