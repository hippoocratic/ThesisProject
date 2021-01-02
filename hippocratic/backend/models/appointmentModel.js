//Structure of our Collection look like
const mongoose =require('mongoose');


const appointmentSchema = new mongoose.Schema({

    patientName:{type: String, required: true, maxlength:120},
    complaint:{type: String, required: true, maxlength:200},
    phone:{type: Number, required: true, maxlength:120},
    day:{type: String, required: true, maxlength:120},
    time:{type: Number, required: true, maxlength:120},
    date : {type: String, required: true, maxlength:120 }

});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;


