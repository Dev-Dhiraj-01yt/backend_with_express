import { Router } from "express";
import bcrypt from "bcrypt";
import { UserValidation,User } from "../models/User.model.js";

const post_router = Router();

post_router.post("/signup", async (req, res) => {
    const { username, email, password } = UserValidation.parse(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);
        try {
            await User.create({
                username: username,
                email: email,
                password: hashedPassword,
            });
            res.status(201).json({ message: "post created succesfully" });
        } catch (error) {
            res
            .status(500)
            .json({
                message: "something went wrong inn database server",
                errorHappend: error,
            });
            console.log(`error occured: ${error}`);
        }
})
export default post_router;