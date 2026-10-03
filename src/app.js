import express from "express";
import cors from "cors";
import post_router from "./routes/post_api.js";
import { get_router } from "./routes/getApi.js";
import { delete_router } from "./routes/deleteApi.js";
const app = express();

//middlewares

app.use(cors());
app.use(express.json());
app.use("/", get_router);
app.use("/post", post_router);
app.use("/user",delete_router);

export default app;
