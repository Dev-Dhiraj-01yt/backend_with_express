import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { User } from "../models/User.model.js";
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
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
          error: error,
        });
      console.log(`error occured: ${error}`);
    }
  } else {
    res.status(404).json({ message: "please send a valid request" });
  }
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      await User.findOneAndDelete({ user_id: id });
      res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "something went wrong", error: error });
    }
  } else {
    res.status(404).json({ message: "user_id is not valid" });
  }
});

app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error: error });
  }
});
export default app;
