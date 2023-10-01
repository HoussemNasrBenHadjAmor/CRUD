import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import todoRoute from "./routes/todos.js";
import connectDB from "./db/index.js";

connectDB();
const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/todos", todoRoute);

app.get("/", (req, res) => {
  res.send("APP IS RUNNING");
});
