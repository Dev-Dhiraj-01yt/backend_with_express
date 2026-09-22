import { Schema, models,model } from "mongoose";

const userSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: [true, "username is required!"],
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true,"please enter your email"],
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+\$/, "Please use a valid email address"] 
    },
    password: {
        type: String,
        required: [true,"please enter the password"],
        trim: true,
        select: false
    }

},{timestamps: true});

export const User = model("User",userSchema);