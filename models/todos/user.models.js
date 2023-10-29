import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // username: String,
    // email: String,
    // isActive: Boolean, this is a correct way wrtting but there is a more professional appraoch :-
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    pasword:{
        type: String,
        required: true 
    }

}, {timestamps:true}) //creating schema with the name userSchema , schema is made in the mongoDB but we didnt connect mongodb in this tutorial cuz we are practicing now data modelling not databse connection. 
// Timestamps in Mongoose automatically manage createdAt and updatedAt fields in MongoDB documents, indicating the creation and last modification times respectively.

export const User = mongoose.model("User", "userSchema") // two parameters name and on which basis 

// it is a standard practice when the name of the model goes to the database it is converted into lowercase and plural so "User" will be as "users", similary "Todo" will be "todos"

