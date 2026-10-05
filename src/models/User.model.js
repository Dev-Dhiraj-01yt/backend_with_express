import { z } from "zod";
import { Schema, model } from "mongoose";

 export const UserValidation = z.object({
  username: z
    .string()
    .min(3, "username must be more than 3 letters")
    .max(12, "username must be not more than 12 letters")
    .regex(/^[a-zA-Z0-9]+$/, "no special character allowed"),
  email: z.string().email({ message: "please enter a valid email adress" }),
  password: z.string()
    .min(6, { message: "password should be more than 6 letters" })
});

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required!"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "please enter the password"],
      trim: true,
      select: false,
    },
  },
  { timestamps: true },
);

export const User = model("User", userSchema);
