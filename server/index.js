import express from "express";
import { mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import taskRoute from "./routes/tasksRoute.js";
import cors from "cors";

const app = express();
const PORT = 5555;

//middleware that alows us to send json data
app.use(express.json());

//middleware for handling cors policy
//First option: Allow all origins with default of cors

app.use(cors());

//allow custom origins
// app.use(
//   cors({
//     origin: "http://localhose:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

//get ressource from server
app.get("/", (request, response) => {
  return response.status(234).send("Welcome to MERN");
});

app.use("/tasks", taskRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(PORT, () => {
      console.log("App is listening to port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });