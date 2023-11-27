//create express server
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { sendMessage } from "./Controller/Message.js";
//create express app
const app = express();
dotenv.config();

//apply middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("Om Shahane / Portfolio");
});

app.post("/message", sendMessage);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

//connection with mongoDB with mongoose
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log("SERVER RUNNING ON PORT", PORT);
    })
  )
  .catch((error) => {
    console.log(error);
  });
