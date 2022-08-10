"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = (0, express_1.default)();
/* import cors from "cors"; */
/* import { FRONTEND_URL } from "./constants"; */
/*---------------------------------*/
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
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
