import { Router } from "express";
import { User } from "../models/User.model.js";

const delete_router = Router();

delete_router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      await User.findOneAndDelete({ _id: id });
      res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "something went wrong", error: error });
    }
  } else {
    res.status(404).json({ message: "user_id is not valid" });
  }
});

export { delete_router };
