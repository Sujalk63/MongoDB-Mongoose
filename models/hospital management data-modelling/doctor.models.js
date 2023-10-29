import mongoose, { Mongoose, mongo } from "mongoose";

const workingHours = new mongoose.Schema({  //mini schema for how much time a doctor spends in a particular hospital
    name:{
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
})

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    qualifications:{
        type: String,
        required: true
    },
    experienceInYears:{
        type: Number,
        default: 0
    },
    worksInHospitals:[ //array cuz a doctor may work in more than one hospital
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
            time: [workingHours]
        },

    ]
}, {timestamps:true});

export const Doctor = mongoose.model("Doctor", doctorSchema)