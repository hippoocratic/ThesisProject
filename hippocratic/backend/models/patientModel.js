//Structure of our Collection look like
const mongoose =require('mongoose');

const patientSchema = new mongoose.Schema({

    displayName:{type:String},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true , minlength:5},
    patientName:{type: String, required: false, maxlength:120},
    complaint:{type: String, required: false, maxlength:200},
    phone:{type: Number, required: true, maxlength:120},
    
 
});

module.exports = Patient = mongoose.model("patient", patientSchema);