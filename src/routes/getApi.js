import { Router } from "express";
import { User } from "../models/User.model";

const get_router = Router();

get_router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error: error });
  }
});
export { get_router };