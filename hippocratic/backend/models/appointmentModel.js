//Structure of our Collection look like
const mongoose =require('mongoose');


const appointmentSchema = new mongoose.Schema({

    patientName:{type: String, required: true, maxlength:120},
    complaint:{type: String, required: true, maxlength:200},
    phone:{type: Number, required: true, maxlength:120},
    day:{type: String, required: true, maxlength:120},
    time : { type : Date, default: Date.now },
    date : {type : Date, default: new Date()}

});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;


