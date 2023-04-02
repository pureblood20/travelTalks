import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
//include routes
import postRoute from "./Routes/posts.js";

const app = Express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/api/v1/posts", postRoute);

//connection with port & mongodb
const CONNECTION_URL =
  "mongodb+srv://shivani:Shivani%4020@nodeexpressproject.knlpv0w.mongodb.net/TravelTalks";
const PORT = process.env.PORT || 8080;
const start = () => {
  try {
    mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log({ msg: error.message });
  }
};
start();
