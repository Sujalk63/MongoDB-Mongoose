import mongoose from "mongoose";

const IcuSchema = new mongoose.Schema({}, {timestamps:true});

export const Icu = mongoose.model("Icu", IcuSchema)