//Structure of our Collection look like
const mongoose =require('mongoose');

const doctorSchema = new mongoose.Schema({
    displayName:{type:String},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true , minlength:5},
    userType:{type:String, required:true}
 
});

module.exports = Doctor = mongoose.model("doctor", doctorSchema);