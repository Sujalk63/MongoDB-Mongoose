import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({ //made mini schema for managing the quantity of any particular product 
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    Quantity:{
        type:{
            type: Number,
            requied: true
        }
    }
}) //we can also make a new file for this schema but its of no use cuz no other file will be using this schema,like todos having subtodos we could have also this schema that way. 

const orderSchema = mongoose.Schema({
    orderPrice:{
        type:Number,
        required: true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems:{
        type: [orderItemSchema]
    },
    address:{
        type: String,
        required: true
    },
    status:{
        type:String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"], // giving only 3 options for the string 
        default: "PENDING"
    }
},{timestamps:true})

export const Order = mongoose.model("Order", orderSchema) 