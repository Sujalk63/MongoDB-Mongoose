import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy:  {
        type: mongoose.Schema.Types.ObjectId, //this a type like boolean and string
        ref: "User" //name of the user model, ref is necessary after the type
    },
    subTodo: [ //sub todos will be an array of objects and we give the ref we made 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ],

}, {timestamps: true});

export const Todo = mongoose.model("Todo", todoSchema)