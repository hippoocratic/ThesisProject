//Structure of our Collection look like
const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true , minlength:5},
    displayName:{type:String},
    userType:{type:String, required:false}
 
});

module.exports = User = mongoose.model("user", userSchema);