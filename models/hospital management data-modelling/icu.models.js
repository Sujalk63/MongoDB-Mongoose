import mongoose from "mongoose";

const IcuSchema = new mongoose.Schema({
    
    icuAvailability:{
        type: String,
        enum:["Available", "Unavailable"],
        default: "Available"
    }
}, {timestamps:true});

export const Icu = mongoose.model("Icu", IcuSchema)