import express, { Request } from "express";
require("dotenv").config();
import "reflect-metadata";
const app = express();
import cors from "cors";
import sendEmail from "./nodemailer";
import { connectPostgres } from "./db/postgres";
import geoip from "geoip-lite";

/* import { FRONTEND_URL } from "./constants"; */

/*---------------------------------*/
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

/*----------------------------------- */
const PORT = process.env.PORT || 5000;
const connectServer = async () => {
  try {
    await connectPostgres();
    app.listen(PORT, () => {
      console.log("Port is good " + PORT);
    });
  } catch (error) {
    console.log(error, "error starting server");
  }
};

connectServer();
/*--------------ROUTES-----------------------*/
app.get("/", (req, res) => {
  res.send("hola");
});
app.get("/api/v1", (req, res) => {
  console.log(req.ip);
  const ip = req.ip;
  var geo = geoip.lookup(ip);

  console.log(geo);

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
//guardar ip en back
//loading en el front cuando este cargando el mail
