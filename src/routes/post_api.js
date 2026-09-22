import app from "../app/ app.js";
import { User } from "../models/User.model.js";


app.post("/postpath01", async (req, res) => {
    const { user_id, username, email, password } = req.body
    req.body?.user_id?.length > 5 ? (await User.create({
        user_id: user_id,
        username: username,
        email: email,
        password: password,

    }), res.status(201).json({ "message": "User created succesfully" }))
        : res.status(404).json({ "message": "somethng went wrong" })
})
