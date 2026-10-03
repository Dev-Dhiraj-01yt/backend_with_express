import { Router } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.model.js";

const router = Router();

router.post("/rawData", async (req, res) => {
    const { user_id, username, email, password } = req.body;

    if (req.body?.user_id?.length >= 4 && password?.length >= 6) {
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            await User.create({
                user_id: user_id,
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
    } else {
        res.status(404).json({ message: "please send a valid request" });
    }

})
export default router;