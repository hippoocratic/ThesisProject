//Structure of our Collection look like
const mongoose =require('mongoose');

const doctorSchema = new mongoose.Schema({
    displayName:{type:String},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true , minlength:5} ,
    // overview:{type: String, required: true, maxlength:120},
    // conferences:{type: String, maxlength:120},
    // insurance_companies:{type: String, maxlength:120},
    // phone:{type: Number, required: true, maxlength:120},
    // location:{type: String, required: true, maxlength:120}
});

module.exports = Doctor = mongoose.model("doctor", doctorSchema);