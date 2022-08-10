import express, { Request } from "express";
require("dotenv").config();
import "reflect-metadata";
const app = express();
import cors from "cors";
import sendEmail from "./nodemailer";
import repoMachine, { connectPostgres } from "./db/postgres";
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
app.get("/api/v1", async (req, res) => {
  let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
  console.log("'IP: '", ip);

  if (typeof ip === "string" && ip.substring(0, 7) === "::ffff:") {
    ip = ip.substring(7);
  }
  let geo;
  if (typeof ip === "string") {
    const foundUser = await repoMachine.User.findOneBy({ ip });

    if (!foundUser) {
      geo = geoip.lookup(ip);
      if (geo) {
        const { country, city } = geo;
        console.log(geo);
        const newUser = repoMachine.User.create({ ip, city, country });
        try {
          await repoMachine.User.save(newUser);
          return res.sendStatus(201);
        } catch (error) {
          console.log("Error saving user");
          return res.sendStatus(400);
        }
      }
      console.log("error looking up geoIp");
      return res.sendStatus(400);
    }
    //we just save and the method on the User model will update the visits
    try {
      /* foundUser.visits++; */
      await repoMachine.User.save(foundUser);
      return res.sendStatus(200);
    } catch (error) {
      console.log("Error updating user");
      return res.sendStatus(400);
    }
  }

  res.sendStatus(204);
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
