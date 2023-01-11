import mongoose, { Schema } from "mongoose";

const paintingSchema = new mongoose.Schema({
    file:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    dimensions:{
        type:String
    },
    description:{
        type:String
    }
},
{
    timestamps: true
})

mongoose.models={}

export default mongoose.models.Painting || mongoose.model('Painting', paintingSchema)