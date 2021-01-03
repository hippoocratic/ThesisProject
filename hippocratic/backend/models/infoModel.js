//Structure of our Collection look like
const mongoose =require('mongoose');


const infoSchema = new mongoose.Schema({

    name:{type: String, required: true, maxlength:120},
    overview:{type: String, required: true, maxlength:120},
    conferences:{type: String, maxlength:120},
    insurance_companies:{type: String, maxlength:120},
    phone:{type: Number, required: true, maxlength:120},
    location:{type: String, required: true, maxlength:120},
    working_hour:{type : Date, default: new Date()}
    
    
});

const Info = mongoose.model("Info", infoSchema);
module.exports = Info;

