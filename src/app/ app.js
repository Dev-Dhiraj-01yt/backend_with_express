import express from "express";
import cors from "cors";
const app = express();

//middlewares
app.use(cors());
app.use(express.json());


const array = [];


//  many of the apis should be asnycronus


app.post("/", (req, res) => {
  req.body?.username?.length > 0
    ? array.push(req.body) &&
    res.status(201).json({ message: "Data added successfully" })
    : res.status(400).json({ message: "something is not working" });
});

app.patch("/array:id", (req, res) => {
  const { id } = req.params;
  const { desc, last_updateDate } = req.body;

  const index = array.findIndex((item) => item.id === id);
  if (index !== -1) {
    array[index].desc == desc;
    array[index].last_updateDate = last_updateDate;

    res.status(200).json({ message: "Data updated successfully" });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});
app.delete("/array:id", (req, res) => {
  const { id } = req.params;

  const index = array.findIndex((item) => item.id == id);
  if (index !== -1) {
    array.splice(index, 1)
    res.status(200).json({ message: "Data deleted successfully" });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.get("/", (req, res) => {
  res.status(200).json(array);
});
export default app;
