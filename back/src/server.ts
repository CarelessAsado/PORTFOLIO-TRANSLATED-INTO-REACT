import express, { Request } from "express";
require("dotenv").config();
const app = express();
import cors from "cors";
import sendEmail from "./nodemailer";
/* import { FRONTEND_URL } from "./constants"; */

/*---------------------------------*/
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

/*----------------------------------- */
const PORT = process.env.PORT || 5000;
const connectServer = () => {
  app.listen(PORT, () => {
    console.log("Port is good " + PORT);
  });
};

connectServer();
/*--------------ROUTES-----------------------*/
app.get("/", (req, res) => {
  res.send("hola");
});

app.post("/api/v1", async (req: Request<{}, {}, emailBody>, res) => {
  console.log(req.body);
  try {
    await sendEmail(req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(404).json("Something went wrong");
  }
});

//VER URL FRONT ACA EN BACK SI VA BIEN
