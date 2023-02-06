import mongoose from "mongoose";


 const studentSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },
    Course:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Contact:{
        type:Number,
        required:true
    },
    Fees:{
        type:Number
    }
})

export default mongoose.model("Student",studentSchema)