const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    overview:{type: String, required: true, maxlength:120},
    conferences:{type: String, maxlength:120},
    insurance_companies:{type: String, maxlength:120},
    phone:{type: Number, required: true, maxlength:120},
    location:{type: String, required: true, maxlength:120}
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports =Doctor;