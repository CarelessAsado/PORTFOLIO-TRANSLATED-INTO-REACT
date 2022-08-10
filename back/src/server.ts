import express from "express";
require("dotenv").config();

const app = express();
/* import cors from "cors"; */
/* import { FRONTEND_URL } from "./constants"; */

/*---------------------------------*/
app.use(express.json());
app.use(express.urlencoded());
/* app.use(cors({ credentials: true, origin: FRONTEND_URL })); */

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
