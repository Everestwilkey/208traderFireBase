import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import { nanoid } from "nanoid";

//router
import postrouter from "./routers/postrouter.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//Fake data

app.use(express.json());

app.use("/api/v1/posts", postrouter);

//404
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});
//500
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something went wrong" });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port 3000");
});
