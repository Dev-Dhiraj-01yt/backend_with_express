import express from "express";
import cors from "cors";
const app = express();

//middlewares
app.use(cors());
app.use(express.json());


const array = [{ hai: "Dhiraj" }];

app.post("/", (req, res) => {
  req.body
    ? array.push(req.body) &&
      res.status(201).json({ message: "Data added successfully" })
    : res.status(400).json({ message: "Please provide a valid note format" });
});
app.get("/", (req, res) => {
  res.status(200).json(array);
});
app.patch("/array:id", (req, res) => {
  const { id } = req.params;
  const { hai } = req.body;
  const index = array.findIndex((item) => item.hai === id);
  if (index !== -1) {
    array[index].hai = hai;
    res.status(200).json({ message: "Data updated successfully" });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});
export default app;
