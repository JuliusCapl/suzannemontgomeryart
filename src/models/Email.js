import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'Please write your email'],
    }
})

export default mongoose.models.Email || mongoose.model('Email', emailSchema)